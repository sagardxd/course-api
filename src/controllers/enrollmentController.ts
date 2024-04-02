import { Request, Response } from 'express';
import { EnrollmentService } from '../services/enrollmentService';

export const enrollCourse = async (req: Request, res: Response) => {
  try {
    const { userId, courseId } = req.body;
    // Call EnrollmentService to handle course enrollment
    const enrollment = await EnrollmentService.enrollCourse(userId, courseId);
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
