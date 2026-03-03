import dotenv from 'dotenv';
import { handleContactRequest } from '../server/contact-handler.mjs';

dotenv.config();

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      res.status(405).json({ message: 'M\u00e9todo no permitido.' });
      return;
    }

    const result = await handleContactRequest(await getRequestBody(req));
    res.status(result.status).json(result.payload);
  } catch (error) {
    console.error('Unexpected contact API error:', error);
    res.status(500).json({ message: 'No pudimos procesar tu mensaje en este momento.' });
  }
}

async function getRequestBody(req) {
  if (req.body == null) {
    const rawBody = await readStreamBody(req);
    return rawBody ? parseJsonIfPossible(rawBody) : undefined;
  }

  if (Buffer.isBuffer(req.body)) {
    return parseJsonIfPossible(req.body.toString('utf8'));
  }

  if (typeof req.body === 'string') {
    return parseJsonIfPossible(req.body);
  }

  return req.body;
}

async function readStreamBody(req) {
  if (typeof req?.[Symbol.asyncIterator] !== 'function') {
    return '';
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }

  return chunks.length > 0 ? Buffer.concat(chunks).toString('utf8') : '';
}

function parseJsonIfPossible(value) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}
