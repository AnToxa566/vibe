import Image from "next/image";

import { AppSubtitle, AppTitle } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Container, RoundedContainer, Title } from "../components";
import { PricesTable } from "./components/components";

import elipse from "~/../public/svg/elipse.svg";

const Prices: React.FC<BaseProps> = ({ className = "" }) => {
  return (
    <RoundedContainer className={`relative pb-32 ${className}`}>
      <Container>
        <Title title={AppTitle.PRICES} white className="mb-10" />

        <p className="text-center text-base font-extralight max-w-[60%] mx-auto mb-10">
          {AppSubtitle.PRICES}
        </p>

        <PricesTable />
      </Container>

      <Image src={elipse} alt="" className="absolute right-1/2 top-10" />
      <Image src={elipse} alt="" className="absolute left-3/4 bottom-2/4" />
    </RoundedContainer>
  );
};

export { Prices };
