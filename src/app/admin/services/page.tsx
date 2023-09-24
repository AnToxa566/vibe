"use client";

import { useQuery } from "react-query";

import { IService } from "~/common/interfaces/interfaces";
import { serviceService } from "~/services/services";
import { Actions } from "../components/actions/actions";
import { AdminTable } from "../components/admin-table/admin-table";
import { QueryKey } from "~/common/enums/enums";

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
  {
    key: "actions",
    label: "ACTIONS",
  },
];

const Page = () => {
  const { data, isLoading } = useQuery(
    QueryKey.GET_SERVICES,
    serviceService.getAll
  );

  const renderCell = (item: IService, key: React.Key) => {
    const cellValue = item[key as keyof IService];

    switch (key) {
      case "subtitle":
        return item.subtitle || "—";
      case "actions":
        return <Actions />;
      default:
        return cellValue as string | number;
    }
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    data && (
      <AdminTable
        columns={columns}
        data={data}
        renderCell={renderCell}
        onDelete={() => {}}
        onEdit={() => {}}
      />
    )
  );
};

export default Page;
