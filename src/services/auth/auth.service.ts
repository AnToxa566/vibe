import { axiosClassic } from "~/api/interceptor";
import { IUser } from "~/common/interfaces/interfaces";
import { removeTokenFromStorage, saveTokenToStorage } from "./auth.helper";

interface IAuthResponse {
  user: IUser;
  accessToken: string;
}

class AuthService {
  async login(login: string, password: string) {
    const response = await axiosClassic.post<IAuthResponse>("/users/login", {
      login,
      password,
    });

    if (response.data.accessToken) {
      saveTokenToStorage(response.data.accessToken);
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
    }

    return response.data;
  }

  logout() {
    removeTokenFromStorage();
  }
}

export { AuthService };
