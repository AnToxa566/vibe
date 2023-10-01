"use client";

import { useContext, useEffect } from "react";
import { useQuery } from "react-query";

import { BarbershopContext } from "~/providers/barberhop-provider";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { FullSpinner, Select } from "~/components/components";
import { SelectOption } from "~/components/select/select";
import { barbershopService } from "~/services/services";
import { QueryKey } from "~/common/enums/enums";

const AddressSelect: React.FC<BaseProps> = ({ className = "" }) => {
  const { barbershop, setBarbershop } = useContext(BarbershopContext);

  const { data: barbershops, isLoading } = useQuery(
    QueryKey.GET_BARBERSHOPS,
    barbershopService.getAll
  );

  const handleChange = (option: SelectOption) => {
    if (barbershops && barbershops.length) {
      setBarbershop(
        barbershops.find((it) => it.address === option.value) || barbershops[0]
      );
    }
  };

  useEffect(() => {
    if (!barbershop && barbershops && barbershops.length) {
      setBarbershop(barbershops[0]);
    }
  }, [barbershop, barbershops, setBarbershop]);

  if (isLoading) {
    return <FullSpinner />;
  }

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
