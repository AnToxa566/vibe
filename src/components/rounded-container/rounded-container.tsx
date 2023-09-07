import { BaseProps } from "~/common/interfaces/interfaces";

interface Props extends BaseProps {
  children: React.ReactNode;
}

const RoundedContainer: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-regular-grey text-white rounded-tr-[6.875rem] rounded-bl-[6.875rem] py-14 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export { RoundedContainer };
