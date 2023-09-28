"use client";

import { useContext, useEffect } from "react";
import { useQuery } from "react-query";

import { BarberContext } from "~/providers/barber-provider";
import { BaseProps } from "~/common/interfaces/interfaces";
import { FullSpinner, Select } from "~/components/components";
import { SelectOption } from "~/components/select/select";
import { barbershopService } from "~/services/services";
import { QueryKey } from "~/common/enums/enums";

const AddressSelect: React.FC<BaseProps> = ({ className = "" }) => {
  const { barberID, setBarberID } = useContext(BarberContext);

  const { data: barbershops, isLoading } = useQuery(
    QueryKey.GET_BARBERSHOPS,
    barbershopService.getAll
  );

  const handleChange = (option: SelectOption) => {
    if (barbershops) {
      setBarberID(
        barbershops.find((it) => it.address === option.value)?.id ||
          barbershops[0].id
      );
    }
  };

  useEffect(() => {
    if (!barberID && barbershops && barbershops.length) {
      setBarberID(barbershops[0].id);
    }
  }, [barberID, barbershops, setBarberID]);

  if (isLoading) {
    return <FullSpinner />;
  }

  return (
    barbershops && (
      <Select
        data={barbershops.map((barber) => ({
          key: barber.id.toString(),
          value: barber.address,
          current: barber.id === barberID,
        }))}
        onChange={handleChange}
        className={className}
      />
    )
  );
};

export { AddressSelect };
