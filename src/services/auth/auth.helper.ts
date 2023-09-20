import cookie from "js-cookie";

export const saveTokenToStorage = (token: string) => {
  cookie.set("accessToken", token);
};

export const removeTokenFromStorage = () => {
  cookie.remove("accessToken");
};
