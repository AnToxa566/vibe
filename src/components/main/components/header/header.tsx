"use client";

import { useEffect, useState } from "react";

import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { Navigation } from "./components/components";
import { Container } from "~/components/components";

import styles from "./styles.module.scss";

const Header: React.FC<BaseProps> = ({ className = "" }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    addEventListener("scroll", handleScroll);

    if (window.scrollY > 20) {
      setScrolled(true);
    }

    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.scrolled : ""
      } ${className}`}
    >
      <Container>
        <Navigation className={styles.nav} />
      </Container>
    </header>
  );
};

export { Header };
