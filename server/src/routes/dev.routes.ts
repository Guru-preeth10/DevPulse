import { Router } from 'express';
import { checkdev } from '../controllers/dev.controller';

const router = Router();

console.log('dev.routes.ts loaded');

// Route: GET /api/dev
router.get('/', checkdev);

export default router;