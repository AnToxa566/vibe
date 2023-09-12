import { ModuleID } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";

const Navigation: React.FC<BaseProps> = ({ className = "" }) => {
  const links = [
    { title: "ціни", href: `#${ModuleID.PRICES}` },
    { title: "майстри", href: `#${ModuleID.MASTERS}` },
    { title: "навчання", href: `#${ModuleID.STUDY}` },
    { title: "контакти", href: `#${ModuleID.CONTACTS}` },
  ];

  return (
    <div className={`flex gap-6 flex-wrap ${className}`}>
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          className="transition ease-in-out duration-200 border-2 border-transparent hover:border-b-regular-grey"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export { Navigation };
