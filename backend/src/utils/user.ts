import bcrypt from "bcrypt";

export const createHash = async (plainTextPassword: string) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(plainTextPassword, salt);
};

export const compareHash = async (
  plainTextPassword: string,
  hashPassword: string
) => {
  return await bcrypt.compare(plainTextPassword, hashPassword);
};
