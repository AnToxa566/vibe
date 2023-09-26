import { Resource } from "~/common/enums/enums";
import { IBaseService, IResource } from "~/common/interfaces/interfaces";
import {
  barberService,
  barbershopService,
  graduationService,
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
  }
};

export { getResourceService };
