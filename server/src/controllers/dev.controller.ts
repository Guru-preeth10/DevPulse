import { Request, Response } from 'express';

export const checkdev = (req: Request, res: Response) => {
  console.log('Dev controller was called');
  res.json({ status: 'ok', message: 'DevPulse API' });
};
