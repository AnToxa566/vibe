import { BaseProps } from "~/common/interfaces/interfaces";
import { PriceTitle } from "../components";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  isFirstRow: boolean;
  gradation: string;
  price?: number;
}

const Price: React.FC<Props> = ({
  price,
  isFirstRow,
  gradation,
  className = "",
}) => {
  return (
    price && (
      <div className={className}>
        {isFirstRow && <PriceTitle title={gradation} />}
        <div className={styles.price}>{price}₴</div>
      </div>
    )
  );
};

export { Price };
