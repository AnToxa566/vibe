import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { PriceTitle } from "../price-title/price-title";

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
