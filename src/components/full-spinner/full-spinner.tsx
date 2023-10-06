"use client";

import { Spinner } from "@nextui-org/react";

import styles from "./styles.module.scss";

const FullSpinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <Spinner color="default" size="lg" className={styles.spinner} />
    </div>
  );
};

export { FullSpinner };
