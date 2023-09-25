import { FC, ReactNode } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

interface Column {
  key: string;
  label: string;
}

interface Props<T> {
  columns: Column[];
  data: T[];
  renderCell: (item: T, key: React.Key) => ReactNode;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const AdminTable = <T extends { id: number }>({
  columns,
  data,
  renderCell,
  onEdit,
  onDelete,
}: Props<T>) => {
  return (
    <Table selectionMode="multiple">
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

export { AdminTable };
