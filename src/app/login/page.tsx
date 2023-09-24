"use client";

import { useMutation, useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "~/components/components";
import { ButtonTitle, MutationKey, QueryKey } from "~/common/enums/enums";
import { authService } from "~/services/services";

import "react-toastify/dist/ReactToastify.css";
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

  const { data: isAdmin, isLoading } = useQuery(
    QueryKey.CHECK_AUTH,
    authService.checkAuth
  );

  const router = useRouter();

  const { mutate: login } = useMutation(
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
    return <main>Loading...</main>;
  }

  if (isAdmin) {
    router.push("/admin");
  }

  return (
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

        <Button title={ButtonTitle.LOGIN} className={styles.btn} />
      </form>

      <ToastContainer
        className={styles.notify}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
};

export default Login;
