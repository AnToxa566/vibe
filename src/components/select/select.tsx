import Image from "next/image";

import { BaseProps } from "~/common/interfaces/interfaces";

import styles from "./styles.module.css";
import arrow from "~/../public/svg/select-arrow.svg";

export interface SelectOption {
  key: string;
  value: string;
  current: boolean;
}

interface Props extends BaseProps {
  data: SelectOption[];
  onChange: (value: SelectOption) => void;
}

const Select: React.FC<Props> = ({ data, onChange, className = "" }) => {
  return (
    <div
      className={`relative w-max cursor-pointer ${styles.container} ${className}`}
    >
      <div className={`flex items-center gap-2 py-2 ${styles.select}`}>
        <Image src={arrow} alt="" className={`${styles.selectArrow}`} />
        <div>{data.find((it) => it.current)?.value}</div>
      </div>

      <div className={`absolute w-full ${styles.options}`}>
        {data.map((it) => (
          <div
            key={it.key}
            onClick={() => onChange(it)}
            className={`text-center text-white bg-regular-grey py-2 ${styles.option}`}
          >
            {it.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Select };
