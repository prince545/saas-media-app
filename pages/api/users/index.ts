import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
