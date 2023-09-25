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
} from "~/services/services";

import styles from "./styles.module.scss";

interface BarberFields {
  name: string;
  barbershop: string;
  graduation: string;
  images: FileList;
}

const Page = () => {
  const { data: barbershops, isLoading: barbershopsLoading } = useQuery(
    QueryKey.GET_BARBERSHOPS,
    barbershopService.getAll
  );

  const { data: graduations, isLoading: graduationsLoading } = useQuery(
    QueryKey.GET_GRADUATIONS,
    graduationService.getAll
  );

  const { mutate: addBarber } = useMutation(
    QueryKey.ADD_BARBER,
    (data: FormData) => barberService.create(data),
    {
      onSuccess() {
        reset();
        toast.success("Barber added!");
      },
      onError() {
        toast.error("Something went wrong!");
      },
    }
  );

  const { register, handleSubmit, reset } = useForm<BarberFields>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<BarberFields> = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("barbershopId", data.barbershop);
    formData.append("graduationId", data.graduation);
    formData.append("image", data.images[0]);

    addBarber(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="Name"
        placeholder="Enter barber name"
        isRequired
        isClearable
        {...register("name", { required: true })}
      />

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

      <Input
        type="file"
        accept="image/*"
        label="Image"
        placeholder="Select image of barber"
        isRequired
        isClearable
        {...register("images", { required: true })}
      />

      <Button type="submit">Add</Button>
    </form>
  );
};

export default Page;
