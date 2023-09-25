"use client";

import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

import { QueryKey } from "~/common/enums/enums";
import { ICreateBarbershop } from "~/common/interfaces/interfaces";
import { barbershopService } from "~/services/services";

import styles from "./styles.module.scss";

interface BarbershopFields {
  lat: number;
  lng: number;
  address: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  schedule: string;
}

const Page = () => {
  const { mutate: addBarbershop } = useMutation(
    QueryKey.ADD_BARBERSHOP,
    (data: ICreateBarbershop) => barbershopService.create(data),
    {
      onSuccess() {
        reset();
        toast.success("Barbershop added!");
      },
      onError(err) {
        console.log(err);
        toast.error("Something went wrong!");
      },
    }
  );

  const { register, handleSubmit, reset } = useForm<BarbershopFields>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<BarbershopFields> = (data) => {
    addBarbershop({
      ...data,
      lat: Number(data.lat),
      lng: Number(data.lng),
      phoneNumbers: [data.firstPhoneNumber, data.secondPhoneNumber],
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="Address"
        placeholder="Enter barbershops' address"
        isRequired
        isClearable
        {...register("address", { required: true })}
      />

      <Input
        type="number"
        label="Latitude"
        placeholder="Enter latitude"
        isRequired
        isClearable
        {...register("lat", { required: true })}
      />

      <Input
        type="number"
        label="Longitude"
        placeholder="Enter longitude"
        isRequired
        isClearable
        {...register("lng", { required: true })}
      />

      <Input
        type="text"
        label="First phone number"
        placeholder="Enter phone number"
        isRequired
        isClearable
        {...register("firstPhoneNumber", { required: true })}
      />

      <Input
        type="text"
        label="Second phone number"
        placeholder="Enter phone number"
        isRequired
        isClearable
        {...register("secondPhoneNumber", { required: true })}
      />

      <Input
        type="text"
        label="Schedule"
        placeholder="Enter barbershops' schedule"
        isRequired
        isClearable
        {...register("schedule", { required: true })}
      />

      <Button type="submit">Add</Button>
    </form>
  );
};

export default Page;
