import { BaseProps } from "~/common/interfaces/interfaces";

interface Props extends BaseProps {
  title: string;
  outline?: boolean;
}

const Button: React.FC<Props> = ({
  title,
  outline = false,
  className = "",
}) => {
  return (
    <button
      className={`transition ease-in-out duration-200 
                  p-3 w-max 
                  border border-regular-grey
                  ${
                    outline
                      ? "bg-transparent text-regular-grey hover:text-white hover:bg-regular-grey"
                      : "bg-regular-grey text-white hover:bg-dark-grey"
                  }
                  ${className}`}
    >
      {title}
    </button>
  );
};

export { Button };
