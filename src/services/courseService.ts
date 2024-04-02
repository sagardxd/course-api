import prisma from 'prismaClient';

export const getCourses = async (filters: any) => {
  const courses = await prisma.course.findMany({
    where: filters,
    orderBy: { id: 'asc' }
  });
  return courses;
};
