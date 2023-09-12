import { BaseProps } from "~/common/interfaces/interfaces";
import { PriceTitle } from "../components";

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
      <div>
        {isFirstRow && <PriceTitle title={gradation} />}
        <div className={`min-w-[3.5rem] ${className}`}>{price}₴</div>
      </div>
    )
  );
};

export { Price };
