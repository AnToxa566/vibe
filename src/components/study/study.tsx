import Image from "next/image";

import {
  AppTitle,
  ButtonTitle,
  ModuleID,
  StageCount,
  StagePrice,
  StageText,
  StudyText,
} from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { Button, Container, RoundedContainer, Title } from "../components";
import { Stage } from "./components/components";

import styles from "./styles.module.scss";

import circle from "~/../public/svg/circle.svg";
import elipse from "~/../public/svg/elipse.svg";

const Study: React.FC<BaseProps> = ({ className = "" }) => {
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

              <Button title={ButtonTitle.REQUEST_CALL} className={styles.btn} />
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
    </div>
  );
};

export { Study };
