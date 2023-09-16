"use client";

import { useContext } from "react";

import { AppTitle, ModuleID } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Container, Title } from "../components";
import { ContactItem, Map } from "./components/components";
import { mapTheme } from "./common/map-theme";
import { BarberContext } from "~/providers/barber-provider";

import styles from "./styles.module.scss";
import barbers from "~/assets/data/barbers.json";

const mapOptions = {
  styles: mapTheme,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  fullscreenControl: false,
};

const Contacts: React.FC<BaseProps> = ({ className = "" }) => {
  const { barberID } = useContext(BarberContext);

  const currentBarber = barbers.find((barber) => barber.id === barberID);

  return (
    <div className={`${styles.contacts} ${className}`} id={ModuleID.CONTACTS}>
      <Container className={styles.container}>
        <Title title={AppTitle.CONTACTS} />

        <div className={styles.content}>
          <div className={styles.data}>
            {barbers.map((barber) => (
              <div key={barber.id} className={styles.col}>
                <ContactItem title="Адреса" content={barber.address} />
                <ContactItem
                  title="Контакти"
                  content={
                    barber.phone_numbers[0] + "\n" + barber.phone_numbers[1]
                  }
                />
                <ContactItem title="Час роботи" content={barber.schedule} />
              </div>
            ))}
          </div>

          {currentBarber && (
            <Map
              className={styles.map}
              mapOptions={mapOptions}
              containerStyle={{
                width: "100%",
                minHeight: "25rem",
              }}
              center={{
                lat: currentBarber.lat,
                lng: currentBarber.lng,
              }}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export { Contacts };
