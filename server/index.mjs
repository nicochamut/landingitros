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
      message: 'Completa un nombre valido y un mensaje de al menos 10 caracteres.',
    });
    return;
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
  if (!isValidEmail) {
    res.status(400).json({
      message: 'El email ingresado no es valido.',
    });
    return;
  }

  const runtimeMissingEnvVars = getMissingEnvVars();
  if (runtimeMissingEnvVars.length > 0) {
    console.error(`Missing required env vars at request time: ${runtimeMissingEnvVars.join(', ')}`);
    res.status(500).json({
      message: 'El servidor no esta configurado para enviar emails.',
    });
    return;
  }

  try {
    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
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

    res.status(200).json({ message: 'Mensaje enviado correctamente.' });
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
