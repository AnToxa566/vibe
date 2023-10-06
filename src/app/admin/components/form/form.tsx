import { FC, PropsWithChildren } from "react";
import { Button } from "@nextui-org/react";

import styles from "./styles.module.scss";

interface Props extends PropsWithChildren {
  isUpdate: boolean;
  onSubmit: () => void;
  isLoading?: boolean;
}

const Form: FC<Props> = ({
  isUpdate,
  onSubmit,
  children,
  isLoading = false,
}) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
      <Button type="submit" isLoading={isLoading}>
        {isUpdate ? "Update" : "Add"}
      </Button>
    </form>
  );
};

export { Form };
