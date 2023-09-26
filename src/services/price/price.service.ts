import instance, { axiosClassic } from "~/api/interceptor";
import {
  IBaseService,
  ICreatePrice,
  IPrice,
} from "~/common/interfaces/interfaces";

class PriceService implements IBaseService<IPrice> {
  async getAll() {
    const response = await axiosClassic.get<IPrice[]>("/prices");
    return response.data;
  }

  async create(payload: ICreatePrice) {
    const response = await instance.post<IPrice>("/prices", payload);
    return response.data;
  }

  async delete(id: number) {
    const response = await instance.delete<boolean>(`/prices/${id}`);
    return response.data;
  }
}

export { PriceService };
