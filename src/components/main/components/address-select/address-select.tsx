"use client";

import { useContext } from "react";

import { BarbershopContext } from "~/providers/barberhop-provider";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { Select } from "~/components/components";
import { SelectOption } from "~/components/select/select";

const AddressSelect: React.FC<BaseProps> = ({ className = "" }) => {
  const { barbershop, barbershops, setBarbershop } =
    useContext(BarbershopContext);

  const handleChange = (option: SelectOption) => {
    if (barbershops && barbershops.length) {
      setBarbershop(
        barbershops.find((it) => it.address === option.value) || barbershops[0]
      );
    }
  };

  return (
    barbershops && (
      <Select
        data={barbershops.map((barber) => ({
          key: barber.id.toString(),
          value: barber.address,
          current: barber.id === barbershop?.id,
        }))}
        onChange={handleChange}
        className={className}
      />
    )
  );
};

export { AddressSelect };
