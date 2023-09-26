"use client";

import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-query";

import { barbershopService } from "~/services/services";
import { IBarbershop } from "~/common/interfaces/interfaces";
import { AdminTable } from "../components/admin-table/admin-table";
import { QueryKey, Resource } from "~/common/enums/enums";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "lat",
    label: "LAT",
  },
  {
    key: "lng",
    label: "LNG",
  },
  {
    key: "address",
    label: "ADDRESS",
  },
  {
    key: "phoneNumbers",
    label: "PHONES",
  },
  {
    key: "schedule",
    label: "SCHEDULE",
  },
];

const Page = () => {
  const { data, isLoading, refetch } = useQuery(
    QueryKey.GET_BARBERSHOPS,
    barbershopService.getAll
  );

  const { mutate: deleteBarbershop } = useMutation(
    QueryKey.DELETE_BARBERSHOP,
    (id: number) => barbershopService.delete(id),
    {
      onSuccess: () => {
        toast.success("Barbershop was deleted!");
        refetch();
      },
      onError: () => {
        toast.error("Something went wrong!");
      },
    }
  );

  const renderCell = (item: IBarbershop, key: React.Key) => {
    const cellValue = item[key as keyof IBarbershop];

    switch (key) {
      case "phoneNumbers":
        return (
          <>
            {item.phoneNumbers.map((it) => (
              <div key={it}>{it}</div>
            ))}
          </>
        );
      default:
        return cellValue;
    }
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    data && (
      <>
        <AdminTable
          resource={Resource.BARBERSHOPS}
          columns={columns}
          data={data}
          renderCell={renderCell}
          onDelete={(id) => deleteBarbershop(id)}
          onEdit={() => {}}
        />
      </>
    )
  );
};

export default Page;
