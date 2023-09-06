import { BaseProps } from "~/common/interfaces/interfaces";

interface Props extends BaseProps {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`xl:container xl:mx-auto px-8 ${className}`}>
      {children}
    </div>
  );
};

export { Container };
