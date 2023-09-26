import instance, { axiosClassic } from "~/api/interceptor";
import {
  IBarbershop,
  IBaseService,
  ICreateBarbershop,
} from "~/common/interfaces/interfaces";

class BarbershopService implements IBaseService<IBarbershop> {
  async getAll() {
    const response = await axiosClassic.get<IBarbershop[]>("/barbershops");
    return response.data;
  }

  async create(payload: ICreateBarbershop) {
    const response = await instance.post<IBarbershop>("/barbershops", payload);
    return response.data;
  }

  async delete(id: number) {
    const response = await instance.delete<boolean>(`/barbershops/${id}`);
    return response.data;
  }
}

export { BarbershopService };
