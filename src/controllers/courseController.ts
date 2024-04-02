import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    // Call AuthService to handle user registration
    const user = await AuthService.registerUser(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
