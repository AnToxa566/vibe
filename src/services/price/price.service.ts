import instance, { axiosClassic } from "~/api/interceptor";
import {
  IPrice,
  ICreatePrice,
} from "~/common/interfaces/price/price.interface";
import { IBaseService } from "~/common/interfaces/base-service/base-service.interface";

class PriceService implements IBaseService<IPrice> {
  async getAll() {
    const response = await axiosClassic.get<IPrice[]>("/prices");
    return response.data;
  }

  async getOne(id: number) {
    const response = await axiosClassic.get<IPrice>(`/prices/${id}`);
    return response.data;
  }

  async create(payload: ICreatePrice) {
    const response = await instance.post<IPrice>("/prices", payload);
    return response.data;
  }

  async update(payload: ICreatePrice, id: number) {
    const response = await instance.put<IPrice>(`/prices/${id}`, payload);
    return response.data;
  }

  async delete(id: number) {
    const response = await instance.delete<boolean>(`/prices/${id}`);
    return response.data;
  }
}

export { PriceService };
