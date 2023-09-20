"use client";

import { useContext, useEffect, useState } from "react";
import { useMutation } from "react-query";

import { BarberContext } from "~/providers/barber-provider";
import { BaseProps, IBarbershop } from "~/common/interfaces/interfaces";
import { Select } from "~/components/components";
import { SelectOption } from "~/components/select/select";
import { barbershopService } from "~/services/services";

const AddressSelect: React.FC<BaseProps> = ({ className = "" }) => {
  const { barberID, setBarberID } = useContext(BarberContext);

  const [barbershops, setBarbershops] = useState<IBarbershop[]>([]);

  const { mutate: getBarbershops } = useMutation(
    "getBarbershops",
    async () => await barbershopService.getAll(),
    {
      onSuccess(data) {
        setBarbershops(data);
      },
    }
  );

  const handleChange = (option: SelectOption) => {
    setBarberID(
      barbershops.find((it) => it.address === option.value)?.id ||
        barbershops[0].id
    );
  };

  useEffect(() => {
    getBarbershops();
  }, [getBarbershops]);

  useEffect(() => {
    if (!barberID && barbershops.length) {
      setBarberID(barbershops[0].id);
    }
  }, [barberID, barbershops, setBarberID]);

  return (
    <Select
      data={barbershops.map((barber) => ({
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
