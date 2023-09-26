"use client";

import { IBarbershop } from "~/common/interfaces/interfaces";
import { AdminTable } from "../components/admin-table/admin-table";
import { Resource } from "~/common/enums/enums";

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

const Page = () => {
  return (
    <AdminTable
      resource={Resource.BARBERSHOPS}
      columns={columns}
      renderCell={renderCell}
    />
  );
};

export default Page;
