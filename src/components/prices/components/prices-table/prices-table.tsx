import { BaseProps } from "~/common/interfaces/interfaces";
import { PriceRow } from "./components/components";

import prices from "~/assets/data/prices.json";

const PricesTable: React.FC<BaseProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {prices.map((price, index) => (
        <PriceRow
          key={price.id}
          price={price}
          isMuted={index % 2 === 0}
          isFirstRow={index === 0}
        />
      ))}
    </div>
  );
};

export { PricesTable };
