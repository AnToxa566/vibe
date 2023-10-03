import { IResource } from "../resource/resource.interface";

interface IGraduation extends IResource {
  id: number;
  title: string;
  priority: number;
}

interface ICreateGraduation {
  title: string;
  priority: number;
}

export type { IGraduation, ICreateGraduation };
