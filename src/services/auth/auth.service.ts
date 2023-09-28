import instance, { axiosClassic } from "~/api/interceptor";
import { IUser } from "~/common/interfaces/interfaces";
import {
  getUserFromStorage,
  removeTokenFromStorage,
  removeUserFromStorage,
  saveTokenToStorage,
  saveUserToStorage,
} from "./auth.helper";

export interface IAuthResponse {
  user: IUser;
  accessToken: string;
}

export interface IUpdatePassword {
  login: string;
  oldPassword: string;
  newPassword: string;
}

class AuthService {
  async login(login: string, password: string) {
    const response = await axiosClassic.post<IAuthResponse>("/users/login", {
      login,
      password,
    });

    if (response.data.accessToken) {
      saveTokenToStorage(response.data.accessToken);
      saveUserToStorage(response.data.user);
    }

    return response.data;
  }

  async updatePassword(payload: IUpdatePassword) {
    const response = await instance.put<IAuthResponse>(
      "/users/update-password",
      payload
    );

    if (response.data.accessToken) {
      saveTokenToStorage(response.data.accessToken);
      saveUserToStorage(response.data.user);
    }

    return response.data;
  }

  async createAdmin(login: string, password: string) {
    const response = await axiosClassic.post<IAuthResponse>("/users/create", {
      login,
      password,
    });

    if (response.data.accessToken) {
      saveTokenToStorage(response.data.accessToken);
      saveUserToStorage(response.data.user);
    }

    return response.data;
  }

  async checkAuth() {
    const response = await instance.get("/users");

    if (response.status === 401) {
      return false;
    }

    return true;
  }

  getUser(): IUser {
    const user = getUserFromStorage();

    if (user) {
      return JSON.parse(user);
    }

    return {} as IUser;
  }

  logout() {
    removeTokenFromStorage();
    removeUserFromStorage();
  }
}

export { AuthService };
