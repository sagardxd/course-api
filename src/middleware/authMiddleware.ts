import { Request, Response, NextFunction } from 'express';

export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  // Your authentication logic here
  // For example: check JWT token and set req.user if authenticated
  next();
};
