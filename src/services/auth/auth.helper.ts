import cookie from "js-cookie";

import { StorageKey } from "~/common/enums/enums";
import { IUser } from "~/common/interfaces/user/user.interface";

export const saveUserToStorage = (user: IUser) => {
  localStorage.setItem(StorageKey.USER, JSON.stringify(user));
};

export const getUserFromStorage = () => {
  return localStorage.getItem(StorageKey.USER);
};

export const removeUserFromStorage = () => {
  localStorage.removeItem(StorageKey.USER);
};

export const saveTokenToStorage = (token: string) => {
  cookie.set(StorageKey.ACCESS_TOKEN, token);
};

export const removeTokenFromStorage = () => {
  cookie.remove(StorageKey.ACCESS_TOKEN);
};
