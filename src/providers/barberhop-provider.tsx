"use client";

import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

import { IBarbershop } from "~/common/interfaces/barbershop/barbershop.interface";

export type BardershopType = IBarbershop | null;

export interface IContext {
  barbershop: BardershopType;
  setBarbershop: Dispatch<SetStateAction<BardershopType>>;
}

export const BarbershopContext = createContext({} as IContext);

const BarbershopProvider: FC<PropsWithChildren> = ({ children }) => {
  const [barbershop, setBarbershop] = useState<BardershopType>(null);

  return (
    <BarbershopContext.Provider value={{ barbershop, setBarbershop }}>
      {children}
    </BarbershopContext.Provider>
  );
};

export { BarbershopProvider as BarberProvider };
