import { axiosClassic } from "~/api/interceptor";
import { IBarbershop } from "~/common/interfaces/interfaces";

class BarbershopService {
  async getAll() {
    const response = await axiosClassic.get<IBarbershop[]>("/barbershops");

    return response.data;
  }
}

export { BarbershopService };
