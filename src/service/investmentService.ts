import { db } from '../utils/dbServer';

import { TInvestment } from '../types/TInvestment';

export const getAllInvestments = async (): Promise<TInvestment[]> => {
  return db.investment.findMany({
    select: {
      id: true,
      value: true,
      annualInterestRate: true,
      createdAt: true,
      confirmedAt: true,
    },
  });
};

export const getInvestments = async (
  id: number,
): Promise<TInvestment | null> => {
  return db.investment.findUnique({
    where: {
      id,
    },
  });
};

// export const createAuthor = async (
//   author: Omit<Author, 'id'>,
// ): Promise<Author> => {
//   const { firstName, lastName } = author;
//   return db.author.create({
//     data: {
//       firstName,
//       lastName,
//     },
//     select: {
//       id: true,
//       firstName: true,
//       lastName: true,
//     },
//   });
// };

// export const updateAuthor = async (
//   author: Omit<Author, 'id'>,
//   id: number,
// ): Promise<Author> => {
//   const { firstName, lastName } = author;
//   return db.author.update({
//     where: {
//       id,
//     },
//     data: {
//       firstName,
//       lastName,
//     },
//     select: {
//       id: true,
//       firstName: true,
//       lastName: true,
//     },
//   });
// };

// export const deleteAuthor = async (id: number): Promise<void> => {
//   await db.author.delete({
//     where: {
//       id,
//     },
//   });
// };
