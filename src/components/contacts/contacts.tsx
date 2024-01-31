"use client";

import Link from "next/link";
import { useContext } from "react";

import { getNumberForLink } from "~/common/utils";
import { AppTitle, ModuleID } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { Container, Title } from "../components";
import { ContactItem, Map } from "./components/components";
import { mapTheme } from "./common/map-theme";
import { BarbershopContext } from "~/providers/barberhop-provider";

import styles from "./styles.module.scss";

const mapOptions: google.maps.MapOptions = {
  styles: mapTheme,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  minZoom: 3,
  maxZoom: 16,
};

const Contacts: React.FC<BaseProps> = ({ className = "" }) => {
  const { barbershop, barbershops } = useContext(BarbershopContext);

  return (
    <div className={`${styles.contacts} ${className}`} id={ModuleID.CONTACTS}>
      <Container className={styles.container}>
        <Title title={AppTitle.CONTACTS} />
        <div className={styles.content}>
          {barbershops && (
            <div className={styles.data}>
              {barbershops.map((it) => (
                <div key={it.id} className={styles.col}>
                  <ContactItem title="Адреса" content={it.address} />
                  <ContactItem title="Час роботи" content={it.schedule} />
                  <ContactItem
                    title="Контакти"
                    content={
                      <div>
                        <Link
                          target="_blank"
                          className={styles.number}
                          href={`tel:${getNumberForLink(it.phoneNumbers[0])}`}
                        >
                          {it.phoneNumbers[0]}
                        </Link>

                        <br />

                        <Link
                          target="_blank"
                          className={styles.number}
                          href={`tel:${getNumberForLink(it.phoneNumbers[1])}`}
                        >
                          {it.phoneNumbers[1]}
                        </Link>
                      </div>
                    }
                  />
                </div>
              ))}
            </div>
          )}

          {barbershop && (
            <Map
              className={styles.map}
              mapOptions={mapOptions}
              containerStyle={{
                width: "100%",
                minHeight: "25rem",
              }}
              center={{
                lat: barbershop.lat,
                lng: barbershop.lng,
              }}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export { Contacts };
