import { BaseProps } from "~/common/interfaces/interfaces";

interface Props extends BaseProps {
  title: string;
}

const Button: React.FC<Props> = ({ title, className = "" }) => {
  return (
    <button
      className={`transition ease-in-out duration-200 px-7 py-3 w-max border border-regular-grey hover:text-white hover:bg-regular-grey ${className}`}
    >
      {title}
    </button>
  );
};

export { Button };
