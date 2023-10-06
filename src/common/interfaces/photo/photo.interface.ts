import { IResource } from "../resource/resource.interface";

interface IPhoto extends IResource {
  id: number;
  path: string;
}

export type { IPhoto };
