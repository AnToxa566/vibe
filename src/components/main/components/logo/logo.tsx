import Image from "next/image";

import { BaseProps } from "~/common/interfaces/interfaces";

import logo from "~/../public/images/logo.png";

const Logo: React.FC<BaseProps> = ({ className = "" }) => {
  return <Image src={logo} alt="Vibe barbershop" className={className} />;
};

export { Logo };
