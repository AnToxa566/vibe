// eslint-disable-next-line import/no-cycle
import { IPrice } from "../price/price.interface";
import { IResource } from "../resource/resource.interface";

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
