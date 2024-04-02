// authController.ts

import { Request, Response } from 'express';
import authService from '../services/authService'; // Note: Importing authService without braces

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    // Call registerUser function from authService
    const user = await authService.registerUser(name, email, password); // Updated here
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
