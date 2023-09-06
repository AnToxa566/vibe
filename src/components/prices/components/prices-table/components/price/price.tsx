import { BaseProps } from "~/common/interfaces/interfaces";

interface Props extends BaseProps {
  price: number;
}

const Price: React.FC<Props> = ({ price, className = "" }) => {
  return <div className={`min-w-[3.5rem] ${className}`}>{price}₴</div>;
};

export { Price };
