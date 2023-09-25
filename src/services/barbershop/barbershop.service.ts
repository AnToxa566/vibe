import { axiosClassic } from "~/api/interceptor";
import { IBarbershop, IBaseService } from "~/common/interfaces/interfaces";

class BarbershopService implements IBaseService<IBarbershop> {
  async getAll() {
    const response = await axiosClassic.get<IBarbershop[]>("/barbershops");

    return response.data;
  }
}

export { BarbershopService };
