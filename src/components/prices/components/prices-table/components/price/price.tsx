interface Props {
  price: number;
  className?: string;
}

const Price: React.FC<Props> = ({ price, className = "" }) => {
  return <div className={`min-w-[3.5rem] ${className}`}>{price}₴</div>;
};

export { Price };
