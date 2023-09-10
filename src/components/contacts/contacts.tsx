import { AppTitle, ModuleID } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Container, Title } from "../components";
import { ContactItem, Map } from "./components/components";
import { mapTheme } from "./common/map-theme";

import contacts from "~/assets/data/contacts.json";

const mapOptions = {
  styles: mapTheme,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  fullscreenControl: false,
};

const Contacts: React.FC<BaseProps> = ({ className = "" }) => {
  return (
    <div className={`relative z-10 ${className}`} id={ModuleID.CONTACTS}>
      <Container>
        <Title title={AppTitle.CONTACTS} />

        <div className="flex justify-between gap-16 my-11 px-inner-container">
          <div className="flex gap-16">
            {contacts.map((contact) => (
              <div key={contact.id} className="flex flex-col gap-6">
                <ContactItem title="Адреса" content={contact.address} />
                <ContactItem
                  title="Контакти"
                  content={
                    contact.phone_numbers[0] + "\n" + contact.phone_numbers[1]
                  }
                />
                <ContactItem title="Час роботи" content={contact.schedule} />
              </div>
            ))}
          </div>

          <Map
            className="w-1/2 rounded-tl-[6.25rem] rounded-br-[6.25rem] overflow-hidden"
            mapOptions={mapOptions}
            containerStyle={{
              width: "100%",
              minHeight: "25rem",
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export { Contacts };
