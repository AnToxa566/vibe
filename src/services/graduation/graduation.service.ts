import { axiosClassic } from "~/api/interceptor";
import { IGraduation } from "~/common/interfaces/interfaces";

class GraduationService {
  async getAll() {
    const response = await axiosClassic.get<IGraduation[]>("/graduations");

    return response.data;
  }
}

export { GraduationService };
