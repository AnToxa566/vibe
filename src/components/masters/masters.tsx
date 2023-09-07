import { AppSubtitle, AppTitle } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Carousel, Container, Title } from "../components";
import { MasterCard } from "./components/components";

import masters from "~/assets/data/masters.json";

const Masters: React.FC<BaseProps> = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <Container>
        <Title title={AppTitle.MASTERS} />

        <p className="text-base text-center font-extralight my-11">
          {AppSubtitle.MASTERS}
        </p>

        <Carousel>
          {masters.map((master) => (
            <MasterCard
              key={master.id}
              master={master}
              className="snap-start"
            />
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export { Masters };
