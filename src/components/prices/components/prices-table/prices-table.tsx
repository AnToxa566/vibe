import prices from "~/assets/data/prices.json";

import { PriceRow } from "./components/components";

interface Props {
  className?: string;
}

const PricesTable: React.FC<Props> = ({ className = "" }) => {
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
