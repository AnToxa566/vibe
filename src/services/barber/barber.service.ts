import instance, { axiosClassic } from "~/api/interceptor";
import { IBarber, IBaseService } from "~/common/interfaces/interfaces";

class BarberService implements IBaseService<IBarber> {
  async getAll() {
    const response = await axiosClassic.get<IBarber[]>("/barbers");

    return response.data;
  }

  async create(payload: FormData) {
    const response = await instance.post<IBarber>("/barbers", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  }
}

export { BarberService };
