import prisma from '../models/prismaClient';

export const updateUserProfile = async (userId: number, updatedProfile: any) => {
  // Update user profile
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: updatedProfile
  });
  return updatedUser;
};
