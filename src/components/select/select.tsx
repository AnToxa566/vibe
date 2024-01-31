import Image from "next/image";
import { useState, useRef } from "react";

import { useOutsideClick } from "~/common/hooks";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";

import { Button } from "../button/button";

import styles from "./styles.module.scss";
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
  const selectRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useOutsideClick(selectRef, () => setIsOpen(false));

  const handleSelectionChange = (item: SelectOption) => {
    onChange(item);
    setIsOpen(false);
  }

  return (
    <div
      className={`${styles.container} ${
        isOpen ? styles.opened : ""
      } ${className}`}
      ref={selectRef}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.select}>
        <Image src={arrow} alt="" className={styles.selectArrow} />
        <div>{data.find((it) => it.current)?.value}</div>
      </div>

      <div className={styles.options}>
        {data.map((it) => (
          <Button
            key={it.key}
            title={it.value}
            onClick={() => handleSelectionChange(it)}
            className={styles.option}
          />
        ))}
      </div>
    </div>
  );
};

export { Select };
