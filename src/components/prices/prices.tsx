import { BaseProps } from "~/common/interfaces/interfaces";
import { Container, Title } from "../components";
import { PricesTable } from "./components/components";

// TODO: Move texts

const Prices: React.FC<BaseProps> = ({ className = "" }) => {
  return (
    <div
      className={`bg-regular-grey text-white rounded-tr-[6.875rem] rounded-bl-[6.875rem] pt-14 pb-32 overflow-hidden ${className}`}
    >
      <Container>
        <Title title="\ ціни" white className="mb-10" />

        <p className="text-center text-base font-extralight max-w-[60%] mx-auto mb-10">
          Актуальні послуги - виконуються майстрами з великим досвідом роботи,
          які допоможуть створити образ, що якнайкраще личитиме твоїй
          особистості.
        </p>

        <PricesTable />
      </Container>
    </div>
  );
};

export { Prices };
