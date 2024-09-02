/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import {
  getAllUsers,
  getUserBalance,
  geUserById,
  transferAmount,
} from "../services";

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
  if (query) {
    return user.filter(
      (user: any) =>
        user?.firstName?.includes(query) || user?.lastName?.includes(query)
    );
  }
  return user;
};

export const useTransferToUser = (toId: string) => {
  const [toUser, setToUser] = useState();
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data, status } = await geUserById(toId);
        if (status === 200) {
          setToUser(data);
        }
      } catch (error) {
        return error;
      }
    };
    getUser();
  }, [toId]);

  return toUser;
};

export const useTransferAmountToUser = (toId: string, amount: number) => {
  const [token] = useLocalStorage("token");
  useEffect(() => {
    const getUser = async () => {
      try {
        if (toId && amount) {
          const { status } = await transferAmount(toId, amount, token);
          if (status == 200) {
            alert("amount transfered");
          }
        }
      } catch (error) {
        return error;
      }
    };
    getUser();
  }, [toId, amount]);
};
