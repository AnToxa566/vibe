"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper/modules";

import { AppSubtitle, AppTitle, ModuleID } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { Container, Title } from "../components";
import { GalleryCard } from "./components/components";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./styles.module.scss";

import photos from "~/assets/data/gallery.json";
import insta from "~/../public/svg/logos_instagram.svg";

const Gallery: React.FC<BaseProps> = ({ className = "" }) => {
  return (
    <div className={`${styles.gallery} ${className}`} id={ModuleID.GALLERY}>
      <Container className={styles.container}>
        <Title title={AppTitle.GALLERY} className={styles.title} />

        <div className={styles.content}>
          <Swiper
            grabCursor={true}
            slidesPerView={3}
            spaceBetween={32}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              800: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1000: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Keyboard]}
            className={styles.carousel}
          >
            {photos.map((photo, index) =>
              index % 2 === 0 ? (
                <SwiperSlide key={photo.id}>
                  <div className={styles.gridCol}>
                    <GalleryCard imgPath={photo.imgPath} />
                    <GalleryCard imgPath={photos[index + 1].imgPath} />
                  </div>
                </SwiperSlide>
              ) : (
                <></>
              )
            )}
          </Swiper>

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
