import Image from "next/image";

import { BaseProps } from "~/common/interfaces/interfaces";

interface Props extends BaseProps {
  imgPath: string;
}

const GalleryCard: React.FC<Props> = ({ imgPath, className = "" }) => {
  return (
    <div className={`${className}`}>
      <Image
        src={imgPath}
        alt="Photo in the gallery"
        width={180}
        height={180}
        className="rounded-tl-3xl rounded-br-3xl"
      />
    </div>
  );
};

export { GalleryCard };
