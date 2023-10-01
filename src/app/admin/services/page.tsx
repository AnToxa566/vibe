"use client";

import { IService } from "~/common/interfaces/service/service.interface";
import { AdminTable } from "../components/admin-table/admin-table";
import { Resource } from "~/common/enums/enums";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "title",
    label: "TITLE",
  },
  {
    key: "subtitle",
    label: "SUBTITLE",
  },
];

const renderCell = (item: IService, key: React.Key) => {
  const cellValue = item[key as keyof IService];

  switch (key) {
    case "subtitle":
      return item.subtitle || "—";
    default:
      return cellValue as string | number;
  }
};

const Page = () => {
  return (
    <AdminTable
      resource={Resource.SERVICES}
      columns={columns}
      renderCell={renderCell}
    />
  );
};

export default Page;
