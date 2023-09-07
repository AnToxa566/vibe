import Image from "next/image";

import { BaseProps } from "~/common/interfaces/interfaces";

import leftArrow from "~/../public/svg/carousel-left-arrow.svg";
import rightArrow from "~/../public/svg/carousel-right-arrow.svg";

interface Props extends BaseProps {
  children: React.ReactNode;
}

const Carousel: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`flex justify-center items-center gap-8 ${className}`}>
      <Image
        src={leftArrow}
        alt="Arrow to scroll left"
        className="cursor-pointer"
      />

      <div className="flex gap-8 snap-x overflow-x-auto">{children}</div>

      <Image
        src={rightArrow}
        alt="Arrow to scroll right"
        className="cursor-pointer"
      />
    </div>
  );
};

export { Carousel };
