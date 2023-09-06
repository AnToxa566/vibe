// TODO: Add BaseProps

interface Props {
  title: string;
  white?: boolean;
  className?: string;
}

const Title: React.FC<Props> = ({ title, white = false, className = "" }) => {
  return (
    <h2
      className={`text-6xl font-black uppercase ${
        white ? "text-white" : "text-regular-grey"
      } ${className}`}
    >
      {title}
    </h2>
  );
};

export { Title };
