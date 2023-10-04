import { Resource } from "~/common/enums/enums";
import { IResource } from "~/common/interfaces/resource/resource.interface";
import { IBaseService } from "~/common/interfaces/base-service/base-service.interface";
import {
  barberService,
  barbershopService,
  graduationService,
  photoService,
  priceService,
  serviceService,
} from "~/services/services";

const getResourceService = (resource: Resource): IBaseService<IResource> => {
  switch (resource) {
    case Resource.BARBERS:
      return barberService;
    case Resource.BARBERSHOPS:
      return barbershopService;
    case Resource.GRADUATIONS:
      return graduationService;
    case Resource.PRICES:
      return priceService;
    case Resource.SERVICES:
      return serviceService;
    case Resource.PHOTOS:
      return photoService;
  }
};

export { getResourceService };
