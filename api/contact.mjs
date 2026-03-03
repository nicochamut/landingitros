import dotenv from 'dotenv';
import { handleContactRequest } from '../server/contact-handler.mjs';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ message: 'M\u00e9todo no permitido.' });
    return;
  }

  const result = await handleContactRequest(req.body);
  res.status(result.status).json(result.payload);
}
