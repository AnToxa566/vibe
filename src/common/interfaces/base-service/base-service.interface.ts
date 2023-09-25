interface IBaseService<T> {
  getAll(): Promise<T[]>;
}

export type { IBaseService };
