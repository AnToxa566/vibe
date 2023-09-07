import Image from "next/image";

import {
  AppTitle,
  ButtonTitle,
  StageCount,
  StagePrice,
  StageText,
  StudyText,
} from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Button, Container, RoundedContainer, Title } from "../components";
import { Stage } from "./components/components";

import circle from "~/../public/svg/circle.svg";
import elipse from "~/../public/svg/elipse.svg";

const Study: React.FC<BaseProps> = ({ className = "" }) => {
  return (
    <RoundedContainer className={`relative overflow-hidden ${className}`}>
      <Container className="z-10">
        <Title title={AppTitle.STUDY} white className="mb-10" />

        <div className="flex justify-between gap-12">
          <div className="flex flex-col justify-between gap-6">
            <div>
              <p className="font-bold mb-12">{StudyText.FIRST}</p>
              <p className="mb-6">{StudyText.SECOND}</p>
              <p>{StudyText.THIRD}</p>
            </div>

            <Button
              title={ButtonTitle.REQUEST_CALL}
              borderColor="white"
              textColor="white"
              className="px-8 hover:bg-white hover:text-regular-grey"
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

      <Image src={circle} alt="" className="absolute top-8 left-4 z-0" />
      <Image src={elipse} alt="" className="absolute top-32 left-60 z-0" />
    </RoundedContainer>
  );
};

export { Study };
