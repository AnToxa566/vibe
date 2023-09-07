import Image from "next/image";

import { ButtonTitle } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Button } from "~/components/components";

interface IMaster {
  name: string;
  graduation: string;
  imgPath: string;
}

interface Props extends BaseProps {
  master: IMaster;
}

const MasterCard: React.FC<Props> = ({ master, className = "" }) => {
  return (
    <div className={`${className}`}>
      <Image
        src={`/images/masters${master.imgPath}`}
        alt={`Барбер ${master.name}`}
        width="190"
        height="260"
        className="rounded-tr-3xl rounded-bl-3xl mb-5"
      />

      <div className="flex items-center gap-3 mb-5">
        <div className="bg-regular-grey w-[1px] h-14"></div>

        <div className="flex flex-col uppercase leading-6">
          <span className="font-black">{master.name}</span>
          <span className="font-thin text-base">{master.graduation}</span>
        </div>
      </div>

      <Button title={ButtonTitle.ONLINE_ENTRY} className="w-[190px]" />
    </div>
  );
};

export { MasterCard };
