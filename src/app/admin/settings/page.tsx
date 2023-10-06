"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "@nextui-org/react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

import { QueryKey } from "~/common/enums/enums";
import { authService } from "~/services/services";
import { IUpdatePassword } from "~/services/auth/auth.service";

import styles from "./styles.module.scss";

interface IChangePasswordFields {
  oldPassword: string;
  newPassword: string;
}

const Page = () => {
  const { mutate: updatePassword, isLoading } = useMutation(
    QueryKey.UPDATE_PASSWORD,
    (data: IUpdatePassword) => authService.updatePassword(data),
    {
      onSuccess() {
        reset();
        toast.success("Password updated");
      },
      onError() {
        toast.error("Something went wrong");
      },
    }
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IChangePasswordFields>({ mode: "onChange" });

  const user = authService.getUser();

  const onSubmit: SubmitHandler<IChangePasswordFields> = (data) => {
    updatePassword({
      ...data,
      login: user.login,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.settingsGroup}>
        <h3 className={styles.title}>Login</h3>

        <div className={styles.inputs}>
          <Input
            type="text"
            label="Login"
            defaultValue={user.login}
            className={styles.input}
            isDisabled
          />
        </div>
      </div>

      <div className={styles.settingsGroup}>
        <h3 className={styles.title}>Password</h3>

        <div className={styles.inputs}>
          <Input
            className={styles.input}
            type="password"
            label="Old password"
            isInvalid={!!errors.oldPassword}
            errorMessage={
              !!errors.oldPassword && "Password must be at least 8 characters"
            }
            isRequired
            isClearable
            {...register("oldPassword", { required: true, minLength: 8 })}
          />
          <Input
            className={styles.input}
            type="password"
            label="New password"
            isInvalid={!!errors.newPassword}
            errorMessage={
              !!errors.newPassword && "Password must be at least 8 characters"
            }
            isRequired
            isClearable
            {...register("newPassword", { required: true, minLength: 8 })}
          />
        </div>
      </div>

      <Button type="submit" isLoading={isLoading}>
        Save
      </Button>
    </form>
  );
};

export default Page;
