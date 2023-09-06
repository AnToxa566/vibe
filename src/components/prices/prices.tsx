import { AppSubtitle, AppTitle } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Container, Title } from "../components";
import { PricesTable } from "./components/components";

const Prices: React.FC<BaseProps> = ({ className = "" }) => {
  return (
    <div
      className={`bg-regular-grey text-white rounded-tr-[6.875rem] rounded-bl-[6.875rem] pt-14 pb-32 overflow-hidden ${className}`}
    >
      <Container>
        <Title title={AppTitle.PRICES} white className="mb-10" />

        <p className="text-center text-base font-extralight max-w-[60%] mx-auto mb-10">
          {AppSubtitle.PRICES}
        </p>

        <PricesTable />
      </Container>
    </div>
  );
};

export { Prices };
