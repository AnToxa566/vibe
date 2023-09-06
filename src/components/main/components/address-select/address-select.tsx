import { BaseProps } from "~/common/interfaces/interfaces";
import { Select } from "~/components/components";

const AddressSelect: React.FC<BaseProps> = ({ className = "" }) => {
  const addresses = ["вул. Перемоги, 20", "пр. Соборний, 181"]; // TODO: Move

  return <Select data={addresses} className={className} />;
};

export { AddressSelect };
