interface Props {
  className?: string;
}

const Navigation: React.FC<Props> = ({ className = "" }) => {
  const links = ["ціни", "майстри", "навчання", "контакти"];

  return (
    <div className={`flex gap-6 flex-wrap ${className}`}>
      {links.map((link, idx) => (
        <a
          key={idx}
          href="#"
          className="transition ease-in-out duration-200 border-2 border-transparent hover:border-b-regular-grey"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export { Navigation };
