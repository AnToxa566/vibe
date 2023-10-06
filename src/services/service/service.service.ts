import instance, { axiosClassic } from "~/api/interceptor";
import {
  IService,
  ICreateService,
} from "~/common/interfaces/service/service.interface";
import { IBaseService } from "~/common/interfaces/base-service/base-service.interface";

class ServiceService implements IBaseService<IService> {
  async getAll() {
    const response = await axiosClassic.get<IService[]>("/services");
    return response.data;
  }

  async getOne(id: number) {
    const response = await axiosClassic.get<IService>(`/services/${id}`);
    return response.data;
  }

  async create(payload: ICreateService) {
    const response = await instance.post<IService>("/services", payload);
    return response.data;
  }

  async update(payload: ICreateService, id: number) {
    const response = await instance.put<IService>(`/services/${id}`, payload);
    return response.data;
  }

  async delete(id: number) {
    const response = await instance.delete<boolean>(`/services/${id}`);
    return response.data;
  }
}

export { ServiceService };
