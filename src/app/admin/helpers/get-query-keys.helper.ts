import { QueryKey, Resource } from "~/common/enums/enums";

interface QueryKeys {
  get: QueryKey;
  add: QueryKey;
  edit: QueryKey;
  delete: QueryKey;
}

const getQueryKeys = (resource: Resource): QueryKeys => {
  switch (resource) {
    case Resource.BARBERS:
      return {
        get: QueryKey.GET_BARBERS,
        add: QueryKey.ADD_BARBER,
        edit: QueryKey.EDIT_BARBER,
        delete: QueryKey.DELETE_BARBER,
      };
    case Resource.BARBERSHOPS:
      return {
        get: QueryKey.GET_BARBERSHOPS,
        add: QueryKey.ADD_BARBERSHOP,
        edit: QueryKey.EDIT_BARBERSHOP,
        delete: QueryKey.DELETE_BARBERSHOP,
      };
    case Resource.GRADUATIONS:
      return {
        get: QueryKey.GET_GRADUATIONS,
        add: QueryKey.ADD_GRADUATION,
        edit: QueryKey.EDIT_GRADUATION,
        delete: QueryKey.DELETE_GRADUATION,
      };
    case Resource.PRICES:
      return {
        get: QueryKey.GET_PRICES,
        add: QueryKey.ADD_PRICE,
        edit: QueryKey.EDIT_PRICE,
        delete: QueryKey.DELETE_PRICE,
      };
    case Resource.SERVICES:
      return {
        get: QueryKey.GET_SERVICES,
        add: QueryKey.ADD_SERVICE,
        edit: QueryKey.EDIT_SERVICE,
        delete: QueryKey.DELETE_SERVICE,
      };
  }
};

export { getQueryKeys };
