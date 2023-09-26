import { FC, PropsWithChildren } from "react";
import { Button } from "@nextui-org/react";

import styles from "./styles.module.scss";

interface Props extends PropsWithChildren {
  isUpdate: boolean;
  onSubmit: () => void;
}

const Form: FC<Props> = ({ isUpdate, onSubmit, children }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
      <Button type="submit">{isUpdate ? "Update" : "Add"}</Button>
    </form>
  );
};

export { Form };
