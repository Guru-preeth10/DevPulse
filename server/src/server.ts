import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic health-check route
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'DevPulse server is running!' });
});

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the DevPulse API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
