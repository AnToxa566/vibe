import { BaseProps } from "~/common/interfaces/interfaces";
import { Price, PriceTitle } from "../components";
import { Gradation } from "~/common/enums/enums";

interface IPrice {
  id: number;
  title: string;
  topPrice: number;
  expertPrice: number;
  ambassadorPrice: number;
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
        <div>
          {isFirstRow && <PriceTitle title={Gradation.TOP_BARBER} />}
          <Price price={price.topPrice} />
        </div>

        <div>
          {isFirstRow && <PriceTitle title={Gradation.EXPERT} />}
          <Price price={price.expertPrice} />
        </div>

        <div>
          {isFirstRow && <PriceTitle title={Gradation.AMBASSADOR} />}
          <Price price={price.ambassadorPrice} />
        </div>
      </div>
    </div>
  );
};

export { PriceRow };
