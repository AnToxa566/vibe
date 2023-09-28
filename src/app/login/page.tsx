"use client";

import { useMutation, useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@nextui-org/react";

import { FullSpinner } from "~/components/components";
import { ButtonTitle, MutationKey, QueryKey } from "~/common/enums/enums";
import { authService } from "~/services/services";

import styles from "./styles.module.scss";

interface LoginFields {
  login: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({ mode: "onChange" });

  const {
    data: isAdmin,
    isLoading,
    isFetched,
  } = useQuery(QueryKey.CHECK_AUTH, authService.checkAuth);

  const router = useRouter();

  const { mutate: login, isLoading: loginLoading } = useMutation(
    MutationKey.LOGIN,
    (data: LoginFields) => authService.login(data.login, data.password),
    {
      onSuccess() {
        router.push("/admin");
      },
      onError() {
        toast.error("Login or password is incorrect!");
      },
    }
  );

  const onSubmit: SubmitHandler<LoginFields> = (data) => {
    login(data);
  };

  if (isLoading) {
    return <FullSpinner />;
  }

  if (isFetched && isAdmin) {
    router.push("/admin");
  }

  return (
    isFetched &&
    !isAdmin && (
      <main className={styles.page}>
        <h2 className={styles.title}>\ Login</h2>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input}>
            <input
              placeholder="login"
              {...register("login", { required: true })}
            />
            {errors.login && (
              <span className={styles.error}>Login is required</span>
            )}
          </div>

          <div className={styles.input}>
            <input
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className={styles.error}>Password is required</span>
            )}
          </div>

          <Button className={styles.btn} isLoading={loginLoading} type="submit">
            {ButtonTitle.LOGIN}
          </Button>
        </form>
      </main>
    )
  );
};

export default Login;
