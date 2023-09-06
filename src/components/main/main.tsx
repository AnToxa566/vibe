import Image from "next/image";

import { Button, Container } from "../components";
import { AddressSelect, Logo, Navigation } from "./components/components";

import man from "~/../public/images/home-man.png";

interface Props {
  className?: string;
}

// TODO: Move texts

const Main: React.FC<Props> = ({ className = "" }) => {
  return (
    <Container>
      <div className={`h-screen flex flex-col justify-around ${className}`}>
        <Navigation className="px-14 z-10" />

        <Logo className="max-w-[55%] z-10" />

        <div className="px-14 flex flex-col gap-6 z-10">
          <p className="w-2/5">
            Ліга досвідчених чоловічих перукарів, де приходять до майстра, а не
            до перукарні.
          </p>

          <Button title="Онлайн запис" />

          <AddressSelect />
        </div>

        <Image
          src={man}
          alt="Adult man"
          className="absolute top-0 right-0 max-h-[98%] w-auto z-0"
        />
      </div>
    </Container>
  );
};

export { Main };
