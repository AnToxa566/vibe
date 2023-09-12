"use client";

import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export type BarderIdType = number | null;

export interface IContext {
  barberID: BarderIdType;
  setBarberID: Dispatch<SetStateAction<BarderIdType>>;
}

export const BarberContext = createContext({} as IContext);

const BarberProvider: FC<PropsWithChildren> = ({ children }) => {
  const [barberID, setBarberID] = useState<BarderIdType>(null);

  return (
    <BarberContext.Provider value={{ barberID, setBarberID }}>
      {children}
    </BarberContext.Provider>
  );
};

export { BarberProvider };
