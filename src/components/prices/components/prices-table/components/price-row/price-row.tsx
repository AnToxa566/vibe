import { BaseProps } from "~/common/interfaces/interfaces";
import { Price, PriceTitle } from "../components";
import { Gradation } from "~/common/enums/enums";

interface IPrice {
  id: number;
  title: string;
  barberPrice?: number;
  topPrice?: number;
  expertPrice?: number;
  ambassadorPrice?: number;
  subtitle?: string;
}

interface Props extends BaseProps {
  price: IPrice;
  isMuted?: boolean;
  isFirstRow?: boolean;
}

const PriceRow: React.FC<Props> = ({
  price,
  isMuted = false,
  isFirstRow = false,
  className = "",
}) => {
  return (
    <div
      className={`flex justify-between px-inner-container ${
        isMuted && "bg-muted-grey"
      } ${className}`}
    >
      <div className="uppercase">
        <span>{price.title}</span>
        {price.subtitle && (
          <span className="font-thin"> ({price.subtitle})</span>
        )}
      </div>

      <div className="flex gap-24">
        <Price
          price={price.barberPrice}
          isFirstRow={isFirstRow}
          gradation={Gradation.BARBER}
        />
        <Price
          price={price.topPrice}
          isFirstRow={isFirstRow}
          gradation={Gradation.TOP_BARBER}
        />
        <Price
          price={price.expertPrice}
          isFirstRow={isFirstRow}
          gradation={Gradation.EXPERT}
        />
        <Price
          price={price.ambassadorPrice}
          isFirstRow={isFirstRow}
          gradation={Gradation.AMBASSADOR}
        />
      </div>
    </div>
  );
};

export { PriceRow };
