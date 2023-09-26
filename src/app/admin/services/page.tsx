"use client";

import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-query";

import { IService } from "~/common/interfaces/interfaces";
import { serviceService } from "~/services/services";
import { AdminTable } from "../components/admin-table/admin-table";
import { QueryKey, Resource } from "~/common/enums/enums";

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

const Page = () => {
  const { data, isLoading, refetch } = useQuery(
    QueryKey.GET_SERVICES,
    serviceService.getAll
  );

  const { mutate: deleteService } = useMutation(
    QueryKey.DELETE_SERVICE,
    (id: number) => serviceService.delete(id),
    {
      onSuccess: () => {
        toast.success("Service was deleted!");
        refetch();
      },
      onError: () => {
        toast.error("Something went wrong!");
      },
    }
  );

  const renderCell = (item: IService, key: React.Key) => {
    const cellValue = item[key as keyof IService];

    switch (key) {
      case "subtitle":
        return item.subtitle || "—";
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
        resource={Resource.SERVICES}
        columns={columns}
        data={data}
        renderCell={renderCell}
        onDelete={(id) => {
          deleteService(id);
        }}
        onEdit={() => {}}
      />
    )
  );
};

export default Page;
