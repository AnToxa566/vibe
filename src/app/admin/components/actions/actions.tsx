import { Tooltip } from "@nextui-org/react";

import { EditIcon } from "./edit-icon";
import { DeleteIcon } from "./delete-icon";

import styles from "./styles.module.scss";

const Actions = () => {
  return (
    <div className={styles.actions}>
      <Tooltip content="Edit">
        <span className={styles.action}>
          <EditIcon />
        </span>
      </Tooltip>
      <Tooltip color="danger" content="Delete">
        <span className={`${styles.action} ${styles.danger}`}>
          <DeleteIcon />
        </span>
      </Tooltip>
    </div>
  );
};

export { Actions };
