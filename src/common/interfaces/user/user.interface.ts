import { IResource } from "../resource/resource.interface";

interface IUser extends IResource {
  id: number;
  login: string;
  password: string;
}

export type { IUser };
