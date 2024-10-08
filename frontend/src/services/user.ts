/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
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

export const signIn = async (
  email: string,
  password: string
): Promise<AxiosResponse<any>> => {
  const user = {
    email,
    password,
  };
  return await axios.post(`${apiBaseUrl}/v1/user/login`, user);
};

export const getAllUsers = async (
  query: string,
  token: string
): Promise<AxiosResponse<any>> => {
  let url = `${apiBaseUrl}/v1/user/bulk`;
  if (query) {
    url += `?filter=${query}`;
  }
  return await axios.get(url, {
    headers: { Authorization: token },
  });
};

export const geUserById = async (id: string): Promise<AxiosResponse<any>> => {
  const url = `${apiBaseUrl}/v1/user/${id}`;
  return await axios.get(url);
};

export const updateUser = async (
  token: string,
  password?: string,
  firstName?: string,
  lastName?: string
): Promise<AxiosResponse<any>> => {
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
