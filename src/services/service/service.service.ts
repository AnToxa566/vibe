import { axiosClassic } from "~/api/interceptor";
import { IBaseService, IService } from "~/common/interfaces/interfaces";

class ServiceService implements IBaseService<IService> {
  async getAll() {
    const response = await axiosClassic.get<IService[]>("/services");

    return response.data;
  }
}

export { ServiceService };
