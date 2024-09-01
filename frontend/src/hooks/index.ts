/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { getAllUsers, getUserBalance } from "../services";

export const useLocalStorage = (key: string, defaultValue: any = "") => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    const value = localStorage.getItem(key);
    if (value) {
      return value;
    } else {
      localStorage.setItem(key, defaultValue);
      return defaultValue;
    }
  });

  const setLocalStorage = (value: any) => {
    setLocalStorageValue(value);
    localStorage.setItem(key, value);
  };
  return [localStorageValue, setLocalStorage];
};

export const useBalance = (): any => {
  const [balance, setBalance] = useState();
  const [token] = useLocalStorage("token");
  useEffect(() => {
    const getBalance = async () => {
      try {
        const { data, status } = await getUserBalance(token);
        if (status === 200) {
          setBalance(data);
        }
      } catch (error) {
        return error;
      }
    };
    getBalance();
  }, []);
  return balance;
};

export const useUsers = (query: any = "") => {
  const [user, setUsers] = useState([]);
  const [token] = useLocalStorage("token");
  useEffect(() => {
    const getBalance = async () => {
      try {
        const { data, status } = await getAllUsers(query, token);
        if (status === 200) {
          setUsers(data);
        }
      } catch (error) {
        return error;
      }
    };
    getBalance();
  }, []);
  return user;
};
