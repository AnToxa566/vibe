import Image from "next/image";

import { BaseProps } from "~/common/interfaces/interfaces";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  imgPath: string;
}

const GalleryCard: React.FC<Props> = ({ imgPath, className = "" }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <Image
        src={imgPath}
        alt="Photo in the gallery"
        width={180}
        height={180}
        className={styles.img}
      />
    </div>
  );
};

export { GalleryCard };
