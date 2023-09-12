import Image from "next/image";

import { AppSubtitle, AppTitle, ModuleID } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Carousel, Container, Title } from "../components";
import { GalleryCard } from "./components/components";

import photos from "~/assets/data/gallery.json";
import insta from "~/../public/svg/logos_instagram.svg";

const Gallery: React.FC<BaseProps> = ({ className = "" }) => {
  return (
    <div className={`relative z-10 ${className}`} id={ModuleID.GALLERY}>
      <Container>
        <Title title={AppTitle.GALLERY} />

        <Carousel className="my-11">
          <div className="grid grid-cols-5 grid-flow-row gap-8 snap-start">
            {photos.map((photo) => (
              <GalleryCard key={photo.id} imgPath={photo.imgPath} />
            ))}
          </div>
        </Carousel>

        <div className="flex flex-wrap justify-center gap-1">
          <span className="text-base font-extralight text-center">
            {AppSubtitle.GALLERY}
          </span>

          <a href="https://www.instagram.com/barbershop.vibe/" target="_blank">
            <Image src={insta} alt="Link to Instagram profile of barbershop" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export { Gallery };
