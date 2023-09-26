import { FC } from "react";
import { Tooltip } from "@nextui-org/react";

import { EditIcon } from "./edit-icon";
import { DeleteIcon } from "./delete-icon";

import styles from "./styles.module.scss";

interface Props {
  onEdit: () => void;
  onDelete: () => void;
}

const Actions: FC<Props> = ({ onEdit, onDelete }) => {
  return (
    <div className={styles.actions}>
      <Tooltip content="Edit">
        <span className={styles.action} onClick={() => onEdit()}>
          <EditIcon />
        </span>
      </Tooltip>
      <Tooltip color="danger" content="Delete">
        <span
          className={`${styles.action} ${styles.danger}`}
          onClick={() => onDelete()}
        >
          <DeleteIcon />
        </span>
      </Tooltip>
    </div>
  );
};

export { Actions };
