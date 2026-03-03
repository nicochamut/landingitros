import nodemailer from 'nodemailer';

const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'CONTACT_TO_EMAIL',
  'CONTACT_FROM_EMAIL',
];

const contactDebug = process.env.CONTACT_DEBUG === 'true';

export const getMissingEnvVars = () => requiredEnvVars.filter((key) => !process.env[key]);

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());

const parseRecipientList = (rawValue) =>
  String(rawValue ?? '')
    .split(/[;,]/)
    .map((email) => email.trim())
    .filter(Boolean);

const createTransporter = () =>
  nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

export async function handleContactRequest(body) {
  const { name, email, company, message } = body ?? {};

  if (!name || !email || !message) {
    return {
      status: 400,
      payload: {
        message: 'Nombre, email y mensaje son obligatorios.',
      },
    };
  }

  if (String(name).trim().length < 2 || String(message).trim().length < 10) {
    return {
      status: 400,
      payload: {
        message: 'Complet\u00e1 un nombre v\u00e1lido y un mensaje de al menos 10 caracteres.',
      },
    };
  }

  if (!isValidEmail(email)) {
    return {
      status: 400,
      payload: {
        message: 'El email ingresado no es v\u00e1lido.',
      },
    };
  }

  const runtimeMissingEnvVars = getMissingEnvVars();
  if (runtimeMissingEnvVars.length > 0) {
    console.error(`Missing required env vars at request time: ${runtimeMissingEnvVars.join(', ')}`);
    return {
      status: 500,
      payload: {
        message: 'El servidor no est\u00e1 configurado para enviar emails.',
      },
    };
  }

  const recipients = parseRecipientList(process.env.CONTACT_TO_EMAIL);
  if (recipients.length === 0 || recipients.some((recipient) => !isValidEmail(recipient))) {
    console.error('Invalid CONTACT_TO_EMAIL value:', process.env.CONTACT_TO_EMAIL);
    return {
      status: 500,
      payload: {
        message: 'La lista de destinatarios del servidor no es v\u00e1lida.',
      },
    };
  }

  try {
    const info = await createTransporter().sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      to: recipients,
      replyTo: String(email).trim(),
      subject: `Nuevo contacto desde landing - ${String(name).trim()}`,
      text: [
        'Nuevo mensaje recibido',
        `Nombre: ${String(name).trim()}`,
        `Email: ${String(email).trim()}`,
        `Empresa: ${String(company ?? '').trim() || 'No indicada'}`,
        '',
        'Mensaje:',
        String(message).trim(),
      ].join('\n'),
      html: `
        <h2>Nuevo mensaje recibido</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(String(name).trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(String(email).trim())}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(String(company ?? '').trim() || 'No indicada')}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(String(message).trim()).replaceAll('\n', '<br />')}</p>
      `,
    });

    if (Array.isArray(info.rejected) && info.rejected.length > 0) {
      console.error('Some recipients were rejected by SMTP:', info.rejected);
    }

    if (!Array.isArray(info.accepted) || info.accepted.length === 0) {
      return {
        status: 502,
        payload: {
          message: 'El proveedor SMTP rechaz\u00f3 todos los destinatarios.',
          ...(contactDebug
            ? {
                debug: {
                  envelope: info.envelope,
                  messageId: info.messageId,
                  accepted: info.accepted,
                  rejected: info.rejected,
                  response: info.response,
                },
              }
            : {}),
        },
      };
    }

    return {
      status: 200,
      payload: {
        message: 'Mensaje enviado correctamente.',
        ...(contactDebug
          ? {
              debug: {
                envelope: info.envelope,
                messageId: info.messageId,
                accepted: info.accepted,
                rejected: info.rejected,
                response: info.response,
              },
            }
          : {}),
      },
    };
  } catch (error) {
    console.error('Contact email error:', error);
    return {
      status: 500,
      payload: {
        message: 'No pudimos enviar tu mensaje en este momento.',
      },
    };
  }
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
