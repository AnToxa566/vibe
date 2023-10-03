"use client";

import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { useQuery } from "react-query";

import { QueryKey } from "~/common/enums/enums";
import { barbershopService } from "~/services/services";
import { IBarbershop } from "~/common/interfaces/barbershop/barbershop.interface";

export interface IContext {
  isLoading: boolean;
  barbershop: IBarbershop;
  barbershops: IBarbershop[];
  setBarbershop: Dispatch<SetStateAction<IBarbershop>>;
  setBarbershops: Dispatch<SetStateAction<IBarbershop[]>>;
}

export const BarbershopContext = createContext({} as IContext);

const BarbershopProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading } = useQuery(
    QueryKey.GET_BARBERSHOPS,
    barbershopService.getAll,
    {
      onSuccess(data) {
        setBarbershops(data);
        setBarbershop(data[0]);
      },
    }
  );

  const [barbershop, setBarbershop] = useState<IBarbershop>({} as IBarbershop);

  const [barbershops, setBarbershops] = useState<IBarbershop[]>([]);

  return (
    <BarbershopContext.Provider
      value={{
        isLoading,
        barbershop,
        barbershops,
        setBarbershop,
        setBarbershops,
      }}
    >
      {children}
    </BarbershopContext.Provider>
  );
};

export { BarbershopProvider };
