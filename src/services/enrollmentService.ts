import prisma from '../models/prismaClient';

export const enrollCourse = async (userId: number, courseId: number) => {
  // Check if the user is already enrolled in the course
  const existingEnrollment = await prisma.enrollment.findFirst({
    where: { userId, courseId }
  });
  if (existingEnrollment) {
    throw new Error('User is already enrolled in this course');
  }

  // Enroll the user in the course
  const newEnrollment = await prisma.enrollment.create({
    data: {
      userId,
      courseId
    }
  });
  return newEnrollment;
};
