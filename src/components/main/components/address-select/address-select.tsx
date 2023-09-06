import { BaseProps } from "~/common/interfaces/interfaces";
import { Select } from "~/components/components";

import addresses from "~/assets/data/addresses.json";

const AddressSelect: React.FC<BaseProps> = ({ className = "" }) => {
  return (
    <Select
      data={addresses.map((address) => address.title)}
      className={className}
    />
  );
};

export { AddressSelect };
