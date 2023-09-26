"use client";

import pluralize from "pluralize";
import { useState, ReactNode } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Actions } from "../actions/actions";
import { Resource } from "~/common/enums/enums";

interface Column {
  key: string;
  label: string;
}

interface Props<T> {
  resource: Resource;
  columns: Column[];
  data: T[];
  renderCell: (item: T, key: React.Key) => ReactNode;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const AdminTable = <T extends { id: number }>({
  resource,
  columns,
  data,
  renderCell,
  onEdit,
  onDelete,
}: Props<T>) => {
  const [id, setId] = useState<number>(0);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Table selectionMode="multiple">
        <TableHeader
          columns={[...columns, { key: "actions", label: "ACTIONS" }]}
        >
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>

        <TableBody items={data}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) =>
                columnKey === "actions" ? (
                  <TableCell>
                    <Actions
                      onEdit={() => onEdit(item.id)}
                      onDelete={() => {
                        setId(item.id);
                        onOpen();
                      }}
                    />
                  </TableCell>
                ) : (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )
              }
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-danger-500">
                {`Delete ${pluralize.singular(resource)}`}
              </ModalHeader>
              <ModalBody className="text-base">
                {`Are you sure you want to delete this ${pluralize.singular(
                  resource
                )}?`}
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    onDelete(id);
                    onClose();
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export { AdminTable };
