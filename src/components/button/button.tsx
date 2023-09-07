import { ButtonTitle } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";

type colors = "regular-grey" | "white" | "transparent";

interface Props extends BaseProps {
  title: ButtonTitle;
  bgColor?: colors;
  textColor?: colors;
  borderColor?: colors;
}

const Button: React.FC<Props> = ({
  title,
  bgColor = "transparent",
  textColor = "regular-grey",
  borderColor = "regular-grey",
  className = "",
}) => {
  return (
    <button
      className={`transition ease-in-out duration-200 
                  p-3 w-max 
                  border border-${borderColor} text-${textColor} bg-${bgColor}
                  ${className}`}
    >
      {title}
    </button>
  );
};

export { Button };
