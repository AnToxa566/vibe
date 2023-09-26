import { IResource } from "../interfaces";

interface IBaseService<T extends IResource> {
  getAll(): Promise<T[]>;
  create(payload: any): Promise<T>;
  update(payload: any, id: number): Promise<T>;
  delete(id: number): Promise<boolean>;
}

export type { IBaseService };
