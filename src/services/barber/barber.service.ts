import { axiosClassic } from "~/api/interceptor";
import { IBarber } from "~/common/interfaces/interfaces";

class BarberService {
  async getAll() {
    const response = await axiosClassic.get<IBarber[]>("/barbers");

    return response.data;
  }
}

export { BarberService };
