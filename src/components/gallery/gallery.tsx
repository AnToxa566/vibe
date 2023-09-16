import Image from "next/image";

import { AppSubtitle, AppTitle, ModuleID } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Carousel, Container, Title } from "../components";
import { GalleryCard } from "./components/components";

import styles from "./styles.module.scss";

import photos from "~/assets/data/gallery.json";
import insta from "~/../public/svg/logos_instagram.svg";

const Gallery: React.FC<BaseProps> = ({ className = "" }) => {
  return (
    <div className={`${styles.gallery} ${className}`} id={ModuleID.GALLERY}>
      <Container className={styles.container}>
        <Title title={AppTitle.GALLERY} className={styles.title} />

        <div className={styles.content}>
          <Carousel className={styles.carousel}>
            <div className={styles.galleryCards}>
              {photos.map((photo) => (
                <GalleryCard key={photo.id} imgPath={photo.imgPath} />
              ))}
            </div>
          </Carousel>

          <div className={styles.photos}>
            {photos.map((photo) => (
              <GalleryCard
                key={photo.id}
                imgPath={photo.imgPath}
                className={styles.photo}
              />
            ))}
          </div>

          <div className={styles.footer}>
            <span className={styles.text}>{AppSubtitle.GALLERY}</span>

            <a
              href="https://www.instagram.com/barbershop.vibe/"
              target="_blank"
            >
              <Image
                src={insta}
                alt="Link to Instagram profile of barbershop"
              />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export { Gallery };
