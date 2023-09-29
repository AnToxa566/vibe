"use client";

import { useContext } from "react";
import { useQuery } from "react-query";

import { AppTitle, ModuleID, QueryKey } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Container, FullSpinner, Title } from "../components";
import { ContactItem, Map } from "./components/components";
import { mapTheme } from "./common/map-theme";
import { BarberContext } from "~/providers/barber-provider";
import { barbershopService } from "~/services/services";

import styles from "./styles.module.scss";

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

  const { data: barbershops, isLoading } = useQuery(
    QueryKey.GET_BARBERSHOPS,
    barbershopService.getAll
  );

  const currentBarbershop = barbershops?.find((it) => it.id === barberID);

  if (isLoading) {
    return <FullSpinner />;
  }

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
                  <ContactItem
                    title="Контакти"
                    content={
                      <>
                        {it.phoneNumbers[0]}
                        <br />
                        {it.phoneNumbers[1]}
                      </>
                    }
                  />
                  <ContactItem title="Час роботи" content={it.schedule} />
                </div>
              ))}
            </div>
          )}

          {currentBarbershop && (
            <Map
              className={styles.map}
              mapOptions={mapOptions}
              containerStyle={{
                width: "100%",
                minHeight: "25rem",
              }}
              center={{
                lat: currentBarbershop.lat,
                lng: currentBarbershop.lng,
              }}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export { Contacts };
