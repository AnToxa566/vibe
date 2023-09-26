"use client";

import { IPrice } from "~/common/interfaces/interfaces";
import { AdminTable } from "../components/admin-table/admin-table";
import { Resource } from "~/common/enums/enums";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "value",
    label: "VALUE",
  },
  {
    key: "service",
    label: "SERVICE",
  },
  {
    key: "barbershop",
    label: "BARBERSHOP",
  },
  {
    key: "graduation",
    label: "GRADUATION",
  },
];

const renderCell = (item: IPrice, key: React.Key) => {
  const cellValue = item[key as keyof IPrice];

  switch (key) {
    case "service":
      return item.service.title;
    case "barbershop":
      return item.barbershop.address;
    case "graduation":
      return item.graduation.title;
    default:
      return cellValue as number;
  }
};

const Page = () => {
  return (
    <AdminTable
      resource={Resource.PRICES}
      columns={columns}
      renderCell={renderCell}
    />
  );
};

export default Page;
