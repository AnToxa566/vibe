import { IPrice, IResource } from "../interfaces";

interface IService extends IResource {
  id: number;
  title: string;
  prices: IPrice[];
  subtitle?: string;
}

interface ICreateService {
  title: string;
  subtitle?: string;
}

export type { IService, ICreateService };
