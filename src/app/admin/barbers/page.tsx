"use client";

import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-query";

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
  const { data, isLoading, refetch } = useQuery(
    QueryKey.GET_BARBERS,
    barberService.getAll
  );

  const { mutate: deleteBarber } = useMutation(
    QueryKey.DELETE_BARBER,
    (id: number) => barberService.delete(id),
    {
      onSuccess: () => {
        toast.success("Barber was deleted!");
        refetch();
      },
      onError: () => {
        toast.error("Something went wrong!");
      },
    }
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
        onDelete={(id) => deleteBarber(id)}
        onEdit={() => {}}
      />
    )
  );
};

export default Page;
