"use client";

import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import { QueryKey } from "~/common/enums/enums";
import { ICreateGraduation } from "~/common/interfaces/interfaces";
import { graduationService } from "~/services/services";

import styles from "./styles.module.scss";

interface GraduationFields {
  title: string;
}

const Page = () => {
  const { mutate: addGraduation } = useMutation(
    QueryKey.ADD_GRADUATION,
    (data: ICreateGraduation) => graduationService.create(data),
    {
      onSuccess() {
        reset();
        toast.success("Graduation added!");
      },
      onError(err) {
        console.log(err);
        toast.error("Something went wrong!");
      },
    }
  );

  const { register, handleSubmit, reset } = useForm<GraduationFields>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<GraduationFields> = (data) => {
    addGraduation(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="Title"
        placeholder="Enter graduation's title"
        isRequired
        isClearable
        {...register("title", { required: true })}
      />

      <Button type="submit">Add</Button>
    </form>
  );
};

export default Page;
