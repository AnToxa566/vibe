"use client";

import { useQuery } from "react-query";

import { IBarber } from "~/common/interfaces/interfaces";
import { barberService } from "~/services/services";
import { AdminTable } from "../components/admin-table/admin-table";
import { QueryKey, Resource } from "~/common/enums/enums";

const columns = [
  {
    key: "id",
    label: "ID",
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

const Page = () => {
  const { data, isLoading } = useQuery(
    QueryKey.GET_BARBERS,
    barberService.getAll
  );

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

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    data && (
      <AdminTable
        resource={Resource.BARBERS}
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
