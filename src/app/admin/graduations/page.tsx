"use client";

import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-query";

import { IGraduation } from "~/common/interfaces/interfaces";
import { graduationService } from "~/services/services";
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
];

const Page = () => {
  const { data, isLoading, refetch } = useQuery(
    QueryKey.GET_GRADUATIONS,
    graduationService.getAll
  );

  const { mutate: deleteGraduation } = useMutation(
    QueryKey.DELETE_GRADUATION,
    (id: number) => graduationService.delete(id),
    {
      onSuccess: () => {
        toast.success("Graduation was deleted!");
        refetch();
      },
      onError: () => {
        toast.error("Something went wrong!");
      },
    }
  );

  const renderCell = (item: IGraduation, key: React.Key) => {
    const cellValue = item[key as keyof IGraduation];

    switch (key) {
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
        resource={Resource.GRADUATIONS}
        columns={columns}
        data={data}
        renderCell={renderCell}
        onDelete={(id) => {
          deleteGraduation(id);
        }}
        onEdit={() => {}}
      />
    )
  );
};

export default Page;
