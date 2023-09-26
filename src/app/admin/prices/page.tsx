"use client";

import { useQuery } from "react-query";

import { IPrice } from "~/common/interfaces/interfaces";
import { priceService } from "~/services/services";
import { AdminTable } from "../components/admin-table/admin-table";
import { QueryKey, Resource } from "~/common/enums/enums";

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

const Page = () => {
  const { data, isLoading } = useQuery(
    QueryKey.GET_PRICES,
    priceService.getAll
  );

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

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    data && (
      <AdminTable
        resource={Resource.PRICES}
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
