import instance, { axiosClassic } from "~/api/interceptor";
import { IBaseService } from "~/common/interfaces/base-service/base-service.interface";
import { IPhoto } from "~/common/interfaces/photo/photo.interface";

class PhotoService implements IBaseService<IPhoto> {
  async getAll(): Promise<IPhoto[]> {
    const response = await axiosClassic.get<IPhoto[]>("/photos");
    return response.data;
  }

  async create(payload: FormData): Promise<IPhoto> {
    const response = await instance.post<IPhoto>("/photos", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  }

  async delete(id: number): Promise<boolean> {
    const response = await instance.delete<boolean>(`/photos/${id}`);
    return response.data;
  }

  async getOne(id: number): Promise<IPhoto> {
    throw new Error("Method not implemented.");
  }

  async update(payload: any, id: number): Promise<IPhoto> {
    throw new Error("Method not implemented.");
  }
}

export { PhotoService };
