import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const media = await prisma.media.findMany({ orderBy: { createdAt: 'desc' } });
      return res.status(200).json(media);
    }
    if (req.method === 'POST') {
      const { type, url, createdAt, userId } = req.body;
      if (!type || !url || !createdAt) {
        return res.status(400).json({ error: 'Missing fields' });
      }
      const newMedia = await prisma.media.create({
        data: {
          type,
          url,
          createdAt: new Date(createdAt),
          userId: userId || null,
        },
      });
      return res.status(201).json(newMedia);
    }
    res.status(405).json({ error: 'Method not allowed' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
} 