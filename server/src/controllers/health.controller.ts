import { Request, Response } from 'express';

export const checkHealth = (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'DevPulse server is running! (now with Controllers)' });
};
