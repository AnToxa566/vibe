import { BaseProps } from "~/common/interfaces/interfaces";

interface Props extends BaseProps {
  title: string;
  content: React.ReactNode;
}

const ContactItem: React.FC<Props> = ({ title, content, className }) => {
  return (
    <div className={`${className}`}>
      <h3 className="text-2xl font-bold mb-1">{title}</h3>
      <p className="text-base whitespace-pre-line">{content}</p>
    </div>
  );
};

export { ContactItem };
