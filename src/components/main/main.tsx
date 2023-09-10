import Image from "next/image";

import { BaseProps } from "~/common/interfaces/interfaces";
import { AppSubtitle, ButtonTitle } from "~/common/enums/enums";
import { Button, Container } from "../components";
import { AddressSelect, Header, Logo } from "./components/components";

import man from "~/../public/images/home-man.png";

const Main: React.FC<BaseProps> = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <Header className="fixed top-0 w-screen" />

      <Container>
        <div className="h-screen flex flex-col justify-center">
          <Logo className="mb-6 max-w-[55%] z-10" />

          <div className="flex flex-col gap-6 z-10 px-inner-container">
            <p className="w-2/5">{AppSubtitle.MAIN}</p>

            <Button
              title={ButtonTitle.ONLINE_ENTRY}
              className="px-7 hover:bg-regular-grey hover:text-white"
            />

            <AddressSelect />
          </div>

          <Image
            src={man}
            alt="Adult man"
            className="absolute top-0 right-0 max-h-[98vh] w-auto z-0"
          />
        </div>
      </Container>
    </div>
  );
};

export { Main };
