import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  title: string;
  content: React.ReactNode;
}

const ContactItem: React.FC<Props> = ({ title, content, className }) => {
  return (
    <div className={`${styles.contact} ${className}`}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export { ContactItem };
