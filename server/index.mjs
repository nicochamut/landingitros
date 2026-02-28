import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = Number(process.env.CONTACT_API_PORT ?? 8787);
const contactDebug = process.env.CONTACT_DEBUG === 'true';

const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'CONTACT_TO_EMAIL',
  'CONTACT_FROM_EMAIL',
];

const getMissingEnvVars = () => requiredEnvVars.filter((key) => !process.env[key]);
const missingEnvVars = getMissingEnvVars();
const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
const parseRecipientList = (rawValue) =>
  String(rawValue ?? '')
    .split(/[;,]/)
    .map((email) => email.trim())
    .filter(Boolean);

if (missingEnvVars.length > 0) {
  console.error(`Missing required env vars: ${missingEnvVars.join(', ')}`);
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.use(express.json({ limit: '250kb' }));

app.post('/api/contact', async (req, res) => {
  const { name, email, company, message } = req.body ?? {};

  if (!name || !email || !message) {
    res.status(400).json({
      message: 'Nombre, email y mensaje son obligatorios.',
    });
    return;
  }

  if (String(name).trim().length < 2 || String(message).trim().length < 10) {
    res.status(400).json({
      message: 'Complet\u00e1 un nombre v\u00e1lido y un mensaje de al menos 10 caracteres.',
    });
    return;
  }

  if (!isValidEmail(email)) {
    res.status(400).json({
      message: 'El email ingresado no es v\u00e1lido.',
    });
    return;
  }

  const runtimeMissingEnvVars = getMissingEnvVars();
  if (runtimeMissingEnvVars.length > 0) {
    console.error(`Missing required env vars at request time: ${runtimeMissingEnvVars.join(', ')}`);
    res.status(500).json({
      message: 'El servidor no est\u00e1 configurado para enviar emails.',
    });
    return;
  }

  const recipients = parseRecipientList(process.env.CONTACT_TO_EMAIL);
  if (recipients.length === 0 || recipients.some((recipient) => !isValidEmail(recipient))) {
    console.error('Invalid CONTACT_TO_EMAIL value:', process.env.CONTACT_TO_EMAIL);
    res.status(500).json({
      message: 'La lista de destinatarios del servidor no es v\u00e1lida.',
    });
    return;
  }

  try {
    const info = await transporter.sendMail({
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
      res.status(502).json({
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
      });
      return;
    }

    res.status(200).json({
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
    });
  } catch (error) {
    console.error('Contact email error:', error);
    res.status(500).json({ message: 'No pudimos enviar tu mensaje en este momento.' });
  }
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`);
});

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
