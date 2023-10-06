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

type BarbershopType = IBarbershop | null;

export interface IContext {
  isLoading: boolean;
  barbershop: BarbershopType;
  barbershops: IBarbershop[];
  setBarbershop: Dispatch<SetStateAction<BarbershopType>>;
  setBarbershops: Dispatch<SetStateAction<IBarbershop[]>>;
}

export const BarbershopContext = createContext({} as IContext);

const BarbershopProvider: FC<PropsWithChildren> = ({ children }) => {
  const [barbershop, setBarbershop] = useState<BarbershopType>(null);

  const [barbershops, setBarbershops] = useState<IBarbershop[]>([]);

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
