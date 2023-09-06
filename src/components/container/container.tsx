interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className="xl:container xl:mx-auto px-8">{children}</div>;
};

export { Container };
