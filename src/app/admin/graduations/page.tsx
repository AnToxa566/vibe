"use client";

import { IGraduation } from "~/common/interfaces/graduation/graduation.interface";
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
];

const renderCell = (item: IGraduation, key: React.Key) => {
  const cellValue = item[key as keyof IGraduation];

  switch (key) {
    default:
      return cellValue;
  }
};

const Page = () => {
  return (
    <AdminTable
      resource={Resource.GRADUATIONS}
      columns={columns}
      renderCell={renderCell}
    />
  );
};

export default Page;
