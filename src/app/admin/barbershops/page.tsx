"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useQuery } from "react-query";

import { barbershopService } from "~/services/services";
import { IBarbershop } from "~/common/interfaces/interfaces";
import { Actions } from "../components/actions/actions";

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
    "getBarbershops",
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
    <Table>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody items={data}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default Page;
