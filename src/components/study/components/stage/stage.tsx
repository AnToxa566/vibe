import { StageCount, StagePrice, StageText } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";

import styles from "./styles.module.css";

interface Props extends BaseProps {
  count: StageCount;
  price: StagePrice;
  text: StageText;
}

const Stage: React.FC<Props> = ({ count, price, text, className = "" }) => {
  const addDotToPrice = (price: StagePrice) => price / 1000 + "." + "000";

  return (
    <div
      className={`p-5 min-h-[10rem] border
                  ${
                    count === StageCount.FIRST &&
                    "rounded-bl-xl" &&
                    styles.gradientFirst
                  }
                  ${
                    count === StageCount.SECOND &&
                    "rounded-br-xl" &&
                    styles.gradientSecond
                  }
                  ${
                    count === StageCount.THIRD &&
                    "rounded-tl-xl" &&
                    styles.gradientFirst
                  }
                  ${className}`}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-3xl font-bold uppercase whitespace-nowrap">
          Stage {count}
        </span>
        <span className="text-3xl font-extralight">
          {addDotToPrice(price)}₴
        </span>
      </div>

      <p>{text}</p>
    </div>
  );
};

export { Stage };
