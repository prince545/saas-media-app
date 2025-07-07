import type { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm } from 'formidable';
import { uploadImage } from '../../../utils/cloudinary';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const form = new IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Form parse error' });
    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file || !file.filepath) {
      return res.status(400).json({ error: 'No file uploaded or file is invalid' });
    }
    const fileBuffer = fs.readFileSync(file.filepath);
    try {
      const result = await uploadImage(fileBuffer, file.originalFilename || 'image');
      // Add to gallery
      await fetch(`${req.headers.origin || ''}/api/media`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: result.public_id,
          type: 'image',
          url: result.secure_url,
          createdAt: Date.now(),
        }),
      });
      res.status(200).json(result);
    } catch (e: any) {
      res.status(500).json({ error: e.message || 'Upload failed' });
    }
  });
} 