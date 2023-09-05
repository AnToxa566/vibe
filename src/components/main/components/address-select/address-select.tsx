import { Select } from "~/components/components";

interface Props {
  className?: string;
}

const AddressSelect: React.FC<Props> = ({ className = "" }) => {
  const addresses = ["вул. Перемоги, 20", "пр. Соборний, 181"]; // TODO: Move

  return <Select data={addresses} className={className} />;
};

export { AddressSelect };
