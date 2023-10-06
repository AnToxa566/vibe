"use client";

import { IBarber } from "~/common/interfaces/barber/barber.interface";
import { AdminTable } from "../components/admin-table/admin-table";
import { Resource } from "~/common/enums/enums";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "altegioId",
    label: "ALTEGIO ID",
  },
  {
    key: "name",
    label: "NAME",
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

const renderCell = (item: IBarber, key: React.Key) => {
  const cellValue = item[key as keyof IBarber];

  switch (key) {
    case "barbershop":
      return item.barbershop.address;
    case "graduation":
      return item.graduation.title;
    default:
      return cellValue as string | number;
  }
};

const Page = () => {
  return (
    <AdminTable
      resource={Resource.BARBERS}
      columns={columns}
      renderCell={renderCell}
    />
  );
};

export default Page;
