"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";

import { Main } from "~/components/main/main";
import { Prices } from "~/components/prices/prices";
import { Masters } from "~/components/masters/masters";
import { Study } from "~/components/study/study";
import { Gallery } from "~/components/gallery/gallery";
import { Contacts } from "~/components/contacts/contacts";
import { BarbershopContext } from "~/providers/barberhop-provider";
import { FullSpinner } from "~/components/components";
import { IBarbershop } from "~/common/interfaces/barbershop/barbershop.interface";

import styles from "./styles.module.scss";
import location from "~/../public/svg/location.svg";

const Home = () => {
  const { barbershops, isLoading, setBarbershop } =
    useContext(BarbershopContext);

  const { isOpen, onClose, onOpenChange } = useDisclosure({
    defaultOpen: true,
  });

  const handleChooseBarbershop = (barbershop: IBarbershop) => {
    setBarbershop(barbershop);
    onClose();
  };

  if (isLoading) {
    return <FullSpinner />;
  }

  return (
    barbershops && (
      <main className={styles.page}>
        <Main />

        <div className={styles.content}>
          <Prices />
          <Masters />
          <Study />
          <Gallery />
          <Contacts />
        </div>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
          <ModalContent>
            <ModalHeader>Оберіть бажану адресу</ModalHeader>

            <ModalBody>
              {barbershops.map((it) => (
                <button
                  key={it.id}
                  className={styles.option}
                  onClick={() => handleChooseBarbershop(it)}
                >
                  <Image src={location} alt="Location icon" />
                  {it.address}
                </button>
              ))}
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>

        <Link
          href="#"
          className="ms_booking"
          data-url="https://n822098.alteg.io/select-city"
        >
          <div className={styles["altegio-btn"]}>
            <div className={styles["altegio-btn--text"]}>Онлайн запис</div>

            <div className={styles["altegio-btn--wave"]}></div>
          </div>
        </Link>
      </main>
    )
  );
};

export default Home;
