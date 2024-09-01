/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { apiBaseUrl } from "../constants";

export const signUp = async (
  email: string,
  firstName: string,
  lastName: string,
  password: string
) => {
  const user = {
    email,
    firstName,
    lastName,
    password,
  };
  return await axios.post(`${apiBaseUrl}/v1/user/signup`, user);
};

export const signIn = async (email: string, password: string) => {
  const user = {
    email,
    password,
  };
  return await axios.post(`${apiBaseUrl}/v1/user/login`, user);
};

export const getAllUsers = async (query: string, token: string) => {
  return await axios.get(`${apiBaseUrl}/v1/user/bulk?filter=${query}`, {
    headers: { Authorization: token },
  });
};

export const updateUser = async (
  token: string,
  password?: string,
  firstName?: string,
  lastName?: string
) => {
  const updatedUser: any = {};
  if (password) {
    updatedUser.password = password;
  }
  if (firstName) {
    updatedUser.firstName = firstName;
  }
  if (lastName) {
    updatedUser.lastName = lastName;
  }
  return await axios.patch(`${apiBaseUrl}/v1/user`, updatedUser, {
    headers: { Authorization: token },
  });
};
