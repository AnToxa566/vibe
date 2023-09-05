import Image from "next/image";

import arrow from "~/../public/svg/select-arrow.svg";

interface Props {
  data: string[];
  className?: string;
}

const Select: React.FC<Props> = ({ data, className = "" }) => {
  return (
    <div className={`relative flex ${className}`}>
      <Image
        src={arrow}
        alt=""
        className="absolute top-[40%] left-0 pointer-events-none"
      />

      <select className="pl-4 focus:outline-none appearance-none">
        {data.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };
