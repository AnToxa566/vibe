import { IPrice } from "../interfaces";

interface IService {
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
