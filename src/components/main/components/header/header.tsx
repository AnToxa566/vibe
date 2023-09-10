"use client";

import { useEffect, useState } from "react";

import { BaseProps } from "~/common/interfaces/interfaces";
import { Navigation } from "./components/components";
import { Container } from "~/components/components";

const Header: React.FC<BaseProps> = ({ className = "" }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`transition ease-in-out duration-300 py-6 z-50 ${
        scrolled ? "bg-regular-grey text-white drop-shadow-md" : ""
      } ${className}`}
    >
      <Container>
        <Navigation className="px-inner-container" />
      </Container>
    </header>
  );
};

export { Header };
