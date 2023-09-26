import { IResource } from "../interfaces";

interface IUser extends IResource {
  id: number;
  login: string;
  password: string;
}

export type { IUser };
