import dotenv from 'dotenv';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getMissingEnvVars, handleContactRequest } from './contact-handler.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = Number(process.env.CONTACT_API_PORT ?? 8787);
const missingEnvVars = getMissingEnvVars();

if (missingEnvVars.length > 0) {
  console.error(`Missing required env vars: ${missingEnvVars.join(', ')}`);
}

app.use(express.json({ limit: '250kb' }));

app.post('/api/contact', async (req, res) => {
  const result = await handleContactRequest(req.body);
  res.status(result.status).json(result.payload);
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`);
});
