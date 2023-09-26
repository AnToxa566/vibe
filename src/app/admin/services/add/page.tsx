"use client";

import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import { QueryKey } from "~/common/enums/enums";
import { ICreateGraduation } from "~/common/interfaces/interfaces";
import { serviceService } from "~/services/services";

import styles from "./styles.module.scss";

interface ServiceFields {
  title: string;
  subtitle?: string;
}

const Page = () => {
  const { mutate: addService } = useMutation(
    QueryKey.ADD_SERVICE,
    (data: ICreateGraduation) => serviceService.create(data),
    {
      onSuccess() {
        reset();
        toast.success("Service added!");
      },
      onError(err) {
        console.log(err);
        toast.error("Something went wrong!");
      },
    }
  );

  const { register, handleSubmit, reset } = useForm<ServiceFields>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ServiceFields> = (data) => {
    addService(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="Title"
        placeholder="Enter service's title"
        isRequired
        isClearable
        {...register("title", { required: true })}
      />

      <Input
        type="text"
        label="Subtitle"
        placeholder="Enter service's subtitle"
        isClearable
        {...register("subtitle")}
      />

      <Button type="submit">Add</Button>
    </form>
  );
};

export default Page;
