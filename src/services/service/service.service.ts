import { axiosClassic } from "~/api/interceptor";
import { IService } from "~/common/interfaces/interfaces";

class ServiceService {
  async getAll() {
    const response = await axiosClassic.get<IService[]>("/services");

    return response.data;
  }
}

export { ServiceService };
