import { IResource } from "../interfaces";

interface IGraduation extends IResource {
  id: number;
  title: string;
}

interface ICreateGraduation {
  title: string;
}

export type { IGraduation, ICreateGraduation };
