import { axiosClassic } from "~/api/interceptor";
import { IBaseService, IGraduation } from "~/common/interfaces/interfaces";

class GraduationService implements IBaseService<IGraduation> {
  async getAll() {
    const response = await axiosClassic.get<IGraduation[]>("/graduations");

    return response.data;
  }
}

export { GraduationService };
