"use client";

import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-query";
import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

import { QueryKey } from "~/common/enums/enums";
import {
  barberService,
  barbershopService,
  graduationService,
  priceService,
  serviceService,
} from "~/services/services";

import styles from "./styles.module.scss";
import { ICreatePrice } from "~/common/interfaces/interfaces";

interface PriceFields {
  value: number;
  service: string;
  barbershop: string;
  graduation: string;
}

const Page = () => {
  const { data: services, isLoading: servicesLoading } = useQuery(
    QueryKey.GET_SERVICES,
    serviceService.getAll
  );

  const { data: barbershops, isLoading: barbershopsLoading } = useQuery(
    QueryKey.GET_BARBERSHOPS,
    barbershopService.getAll
  );

  const { data: graduations, isLoading: graduationsLoading } = useQuery(
    QueryKey.GET_GRADUATIONS,
    graduationService.getAll
  );

  const { mutate: addPrice } = useMutation(
    QueryKey.ADD_PRICE,
    (data: ICreatePrice) => priceService.create(data),
    {
      onSuccess() {
        reset();
        toast.success("Price added!");
      },
      onError() {
        toast.error("Something went wrong!");
      },
    }
  );

  const { register, handleSubmit, reset } = useForm<PriceFields>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<PriceFields> = (data) => {
    addPrice({
      value: Number(data.value),
      service: { id: Number(data.service) },
      barbershop: { id: Number(data.barbershop) },
      graduation: { id: Number(data.graduation) },
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="number"
        label="Value"
        placeholder="Enter price's value"
        isRequired
        isClearable
        {...register("value", { required: true })}
      />

      <Select
        label="Service"
        placeholder="Select a service"
        isRequired
        isLoading={servicesLoading}
        {...register("service", { required: true })}
      >
        {services
          ? services.map((it) => (
              <SelectItem key={it.id} value={it.id}>
                {`${it.title} ${it.subtitle ? `(${it.subtitle})` : ""}`}
              </SelectItem>
            ))
          : []}
      </Select>

      <Select
        label="Barbershop"
        placeholder="Select a barbershop"
        isRequired
        isLoading={barbershopsLoading}
        {...register("barbershop", { required: true })}
      >
        {barbershops
          ? barbershops.map((it) => (
              <SelectItem key={it.id} value={it.id}>
                {it.address}
              </SelectItem>
            ))
          : []}
      </Select>

      <Select
        label="Graduation"
        placeholder="Select a graduation"
        isRequired
        isLoading={graduationsLoading}
        {...register("graduation", { required: true })}
      >
        {graduations
          ? graduations.map((it) => (
              <SelectItem key={it.id} value={it.id}>
                {it.title}
              </SelectItem>
            ))
          : []}
      </Select>

      <Button type="submit">Add</Button>
    </form>
  );
};

export default Page;
