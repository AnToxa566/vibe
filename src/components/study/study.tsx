"use client";

import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Input,
  Button as NextButton,
} from "@nextui-org/react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useForm } from "@formspree/react";

import {
  AppTitle,
  ButtonTitle,
  ModuleID,
  StageCount,
  StagePrice,
  StageText,
  StudyText,
} from "~/common/enums/enums";
import { ENV } from "~/common/constants/constants";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { Button, Container, RoundedContainer, Title } from "../components";
import { Stage } from "./components/components";

import styles from "./styles.module.scss";

import circle from "~/../public/svg/circle.svg";
import elipse from "~/../public/svg/elipse.svg";

const Study: React.FC<BaseProps> = ({ className = "" }) => {
  const [state, handleSubmit] = useForm(ENV.FOORMSPREE_KEY);

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (state.succeeded) {
      onClose();
      toast.success("Ваш запит отримано! ❤️");
    }
  }, [onClose, state.succeeded]);

  return (
    <div className={`${styles.study} ${className}`} id={ModuleID.STUDY}>
      <RoundedContainer className={styles.wrapper}>
        <Container className={styles.inner}>
          <Title title={AppTitle.STUDY} white className={styles.title} />

          <div className={styles.content}>
            <div className={styles.info}>
              <div className={styles.text}>
                <p className={styles.mainText}>{StudyText.FIRST}</p>

                <div className={styles.subText}>
                  <p>{StudyText.SECOND}</p>
                  <p>{StudyText.THIRD}</p>
                </div>
              </div>

              <Button
                title={ButtonTitle.REQUEST_CALL}
                onClick={onOpen}
                className={styles.btn}
              />
            </div>

            <div>
              <Stage
                count={StageCount.FIRST}
                price={StagePrice.FIRST}
                text={StageText.FIRST}
              />
              <Stage
                count={StageCount.SECOND}
                price={StagePrice.SECOND}
                text={StageText.SECOND}
              />
              <Stage
                count={StageCount.THIRD}
                price={StagePrice.THIRD}
                text={StageText.THIRD}
              />
            </div>
          </div>
        </Container>

        <Image
          src={circle}
          alt=""
          className={`${styles.bgItem} ${styles.circle}`}
        />
        <Image
          src={elipse}
          alt=""
          className={`${styles.bgItem} ${styles.elipse}`}
        />
      </RoundedContainer>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          <>
            <ModalHeader>Замовити дзвінок</ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                  autoFocus
                  label="Ім'я"
                  variant="bordered"
                  name="name"
                  isRequired
                />
                <Input
                  label="Номер телефону"
                  variant="bordered"
                  name="phone"
                  isRequired
                />

                <NextButton
                  type="submit"
                  radius="none"
                  disabled={state.submitting}
                  className="w-fit self-end mb-3"
                >
                  Замовити
                </NextButton>
              </form>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
};

export { Study };
