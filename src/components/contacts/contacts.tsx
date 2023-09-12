"use client";

import { useContext } from "react";

import { AppTitle, ModuleID } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Container, Title } from "../components";
import { ContactItem, Map } from "./components/components";
import { mapTheme } from "./common/map-theme";
import { BarberContext } from "~/providers/barber-provider";

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
    <div className={`relative z-10 ${className}`} id={ModuleID.CONTACTS}>
      <Container>
        <Title title={AppTitle.CONTACTS} />

        <div className="flex justify-between gap-16 my-11 px-inner-container">
          <div className="flex gap-16">
            {barbers.map((barber) => (
              <div key={barber.id} className="flex flex-col gap-6">
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
              className="w-1/2 rounded-tl-[6.25rem] rounded-br-[6.25rem] overflow-hidden"
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
