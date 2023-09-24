"use client";

import { useQuery } from "react-query";

import { IGraduation } from "~/common/interfaces/interfaces";
import { graduationService } from "~/services/services";
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
    key: "actions",
    label: "ACTIONS",
  },
];

const Page = () => {
  const { data, isLoading } = useQuery(
    QueryKey.GET_GRADUATIONS,
    graduationService.getAll
  );

  const renderCell = (item: IGraduation, key: React.Key) => {
    const cellValue = item[key as keyof IGraduation];

    switch (key) {
      case "actions":
        return <Actions />;
      default:
        return cellValue;
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
