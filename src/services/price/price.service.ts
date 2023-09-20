import { axiosClassic } from "~/api/interceptor";
import { IPrice } from "~/common/interfaces/interfaces";

class PriceService {
  async getAll() {
    const response = await axiosClassic.get<IPrice[]>("/prices");

    return response.data;
  }
}

export { PriceService };
