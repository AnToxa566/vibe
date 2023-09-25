import { axiosClassic } from "~/api/interceptor";
import { IBaseService, IPrice } from "~/common/interfaces/interfaces";

class PriceService implements IBaseService<IPrice> {
  async getAll() {
    const response = await axiosClassic.get<IPrice[]>("/prices");

    return response.data;
  }
}

export { PriceService };
