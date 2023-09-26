"use client";

import pluralize from "pluralize";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "react-query";
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
import { getQueryKeys } from "../../helpers/get-query-keys.helper";
import { IResource } from "~/common/interfaces/interfaces";
import { getResourceService } from "../../helpers/get-service.helper";

interface Column {
  key: string;
  label: string;
}

interface Props<T extends IResource> {
  resource: Resource;
  columns: Column[];
  renderCell: (item: T, key: React.Key) => ReactNode;
}

const AdminTable = <T extends IResource>({
  resource,
  columns,
  renderCell,
}: Props<T>) => {
  const router = useRouter();

  const [id, setId] = useState<number>(0);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const queryKeys = getQueryKeys(resource);

  const resourceService = getResourceService(resource);

  const resourceName = pluralize.singular(resource);

  const { data, isLoading, refetch } = useQuery(
    queryKeys.get,
    resourceService.getAll
  );

  const { mutate: deleteResource } = useMutation(
    queryKeys.delete,
    (id: number) => resourceService.delete(id),
    {
      onSuccess: () => {
        toast.success("Item was deleted!");
        refetch();
      },
      onError: () => {
        toast.error("Something went wrong!");
      },
    }
  );

  if (isLoading) {
    return <>Loading...</>;
  }

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

        <TableBody items={data as T[]}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) =>
                columnKey === "actions" ? (
                  <TableCell>
                    <Actions
                      onEdit={() => router.push(`${resource}/${item.id}`)}
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
                {`Delete ${resourceName}`}
              </ModalHeader>
              <ModalBody className="text-base">
                {`Are you sure you want to delete this ${resourceName}?`}
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    deleteResource(id);
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
