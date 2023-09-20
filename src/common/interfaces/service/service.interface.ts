import { IPrice } from "../interfaces";

interface IService {
  id: number;
  title: string;
  prices: IPrice[];
  subtitle?: string;
}

export type { IService };
