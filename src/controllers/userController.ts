import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updatedProfile = req.body;
    // Call UserService to update user profile
    const user = await UserService.updateUserProfile(userId, updatedProfile);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
