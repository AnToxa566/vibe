import instance, { axiosClassic } from "~/api/interceptor";
import { IBarber, IBaseService } from "~/common/interfaces/interfaces";

class BarberService implements IBaseService<IBarber> {
  async getAll() {
    const response = await axiosClassic.get<IBarber[]>("/barbers");
    return response.data;
  }

  async getOne(id: number) {
    const response = await axiosClassic.get<IBarber>(`/barbers/${id}`);
    return response.data;
  }

  async create(payload: FormData) {
    const response = await instance.post<IBarber>("/barbers", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  }

  async update(payload: FormData, id: number) {
    const response = await instance.put<IBarber>(`/barbers/${id}`, payload);
    return response.data;
  }

  async delete(id: number) {
    const response = await instance.delete<boolean>(`/barbers/${id}`);
    return response.data;
  }
}

export { BarberService };
