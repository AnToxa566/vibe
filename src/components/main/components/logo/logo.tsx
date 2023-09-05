import Image from "next/image";
import logo from "~/../public/images/logo.png";

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className = "" }) => {
  return <Image src={logo} alt="Vibe barbershop" className={className} />;
};

export { Logo };
