"use client";

import Link from "next/link";
import { useState } from "react";

import { ModuleID } from "~/common/enums/enums";
import { AddressSelect } from "../../../components";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";

import styles from "./styles.module.scss";

const Navigation: React.FC<BaseProps> = ({ className = "" }) => {
  const [isBurgerCollapsed, setIsBurgerCollapsed] = useState<boolean>(false);

  const links = [
    { title: "ціни", href: `#${ModuleID.PRICES}` },
    { title: "майстри", href: `#${ModuleID.MASTERS}` },
    { title: "навчання", href: `#${ModuleID.STUDY}` },
    { title: "контакти", href: `#${ModuleID.CONTACTS}` },
  ];

  return (
    <nav className={`${styles.nav} ${className}`}>
      <div className={`${styles.links} ${isBurgerCollapsed ? styles.in : ""}`}>
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            onClick={() => setIsBurgerCollapsed(false)}
            className={styles.link}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <AddressSelect className={styles.address} />

      <div
        className={`${styles.burger} ${
          isBurgerCollapsed ? styles.collapsed : ""
        }`}
        onClick={() => setIsBurgerCollapsed(!isBurgerCollapsed)}
      >
        <span className={styles.lines}></span>
      </div>
    </nav>
  );
};

export { Navigation };
