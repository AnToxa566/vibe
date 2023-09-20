import { BaseProps } from "~/common/interfaces/interfaces";
import { PriceTitle } from "../components";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  isFirstRow: boolean;
  graduation: string;
  price?: number;
}

const Price: React.FC<Props> = ({
  price,
  isFirstRow,
  graduation,
  className = "",
}) => {
  return (
    price && (
      <div className={className}>
        {isFirstRow && <PriceTitle title={graduation} />}
        <div className={styles.price}>{price}₴</div>
      </div>
    )
  );
};

export { Price };
