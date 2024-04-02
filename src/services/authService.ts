// authService.ts

import prisma from '../models/prismaClient';

export const registerUser = async (name: string, email: string, password: string) => {
  // Check if the user with the provided email already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Create a new user
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password // Note: You should hash the password before storing it in the database
    }
  });
  return newUser;
};

// Export the function
export default { registerUser };
