"use client";

import { useContext } from "react";

import { AppSubtitle, AppTitle, ModuleID } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Carousel, Container, Title } from "../components";
import { MasterCard } from "./components/components";
import { BarberContext } from "~/providers/barber-provider";

import masters from "~/assets/data/masters.json";

const Masters: React.FC<BaseProps> = ({ className = "" }) => {
  const { barberID } = useContext(BarberContext);

  return (
    <div className={`relative z-10 ${className}`} id={ModuleID.MASTERS}>
      <Container>
        <Title title={AppTitle.MASTERS} />

        <p className="text-base text-center font-extralight my-11">
          {AppSubtitle.MASTERS}
        </p>

        <Carousel>
          {masters
            .filter((master) => master.barberId === barberID)
            .map((master) => (
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
