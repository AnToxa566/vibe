import Image from "next/image";

import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";

import logo from "~/../public/images/logo.png";

const Logo: React.FC<BaseProps> = ({ className = "" }) => {
  return <Image unoptimized src={logo} alt="Vibe barbershop" className={className} />;
};

export { Logo };
