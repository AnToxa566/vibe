"use client";

import { useContext, useEffect } from "react";

import { BarberContext } from "~/providers/barber-provider";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Select } from "~/components/components";
import { SelectOption } from "~/components/select/select";

import barbers from "~/assets/data/barbers.json";

const AddressSelect: React.FC<BaseProps> = ({ className = "" }) => {
  const { barberID, setBarberID } = useContext(BarberContext);

  const handleChange = (option: SelectOption) =>
    setBarberID(
      barbers.find((it) => it.address === option.value)?.id || barbers[0].id
    );

  useEffect(() => {
    if (!barberID) {
      setBarberID(barbers[0].id);
    }
  }, [barberID, setBarberID]);

  return (
    <Select
      data={barbers.map((barber) => ({
        key: barber.id.toString(),
        value: barber.address,
        current: barber.id === barberID,
      }))}
      onChange={handleChange}
      className={className}
    />
  );
};

export { AddressSelect };
