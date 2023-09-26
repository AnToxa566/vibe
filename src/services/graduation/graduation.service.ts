import instance, { axiosClassic } from "~/api/interceptor";
import {
  IBaseService,
  ICreateGraduation,
  IGraduation,
} from "~/common/interfaces/interfaces";

class GraduationService implements IBaseService<IGraduation> {
  async getAll() {
    const response = await axiosClassic.get<IGraduation[]>("/graduations");
    return response.data;
  }

  async getOne(id: number) {
    const response = await axiosClassic.get<IGraduation>(`/graduations/${id}`);
    return response.data;
  }

  async create(payload: ICreateGraduation) {
    const response = await instance.post<IGraduation>("/graduations", payload);
    return response.data;
  }

  async update(payload: ICreateGraduation, id: number) {
    const response = await instance.put<IGraduation>(
      `/graduations/${id}`,
      payload
    );
    return response.data;
  }

  async delete(id: number) {
    const response = await instance.delete<boolean>(`/graduations/${id}`);
    return response.data;
  }
}

export { GraduationService };
