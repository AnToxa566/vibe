"use client";

import { useQuery } from "react-query";

import { barbershopService } from "~/services/services";
import { IBarbershop } from "~/common/interfaces/interfaces";
import { Actions } from "../components/actions/actions";
import { AdminTable } from "../components/admin-table/admin-table";
import { QueryKey } from "~/common/enums/enums";

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
  {
    key: "actions",
    label: "ACTIONS",
  },
];

const Page = () => {
  const { data, isLoading } = useQuery(
    QueryKey.GET_BARBERSHOPS,
    barbershopService.getAll
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
