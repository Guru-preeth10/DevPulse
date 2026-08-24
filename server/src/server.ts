import 'dotenv/config';
import express, { Request, Response } from 'express';
import healthRoutes from './routes/health.routes';
import { errorHandler } from './middleware/error.middleware';
import devRoutes from './routes/dev.routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// API Routes
app.use('/api/health', healthRoutes);

console.log('Registering dev routes...');
app.use('/api/dev', devRoutes);
// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the DevPulse API!');
});

// Centralized Error Handling Middleware (must be registered last)
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
