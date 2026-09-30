"use client";

import Image from "next/image";
import { AdminTable } from "../components/admin-table/admin-table";
import { Resource } from "~/common/enums/enums";
import { IPhoto } from "~/common/interfaces/photo/photo.interface";
import { ENV } from "~/common/constants/constants";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "path",
    label: "PHOTO",
  },
];

const renderCell = (item: IPhoto, key: React.Key) => {
  const cellValue = item[key as keyof IPhoto];

  switch (key) {
    case "path":
      return (
        <Image
          unoptimized
          alt=""
          width={100}
          height={100}
          src={item.path}
          referrerPolicy="no-referrer"
        />
      );
    default:
      return cellValue;
  }
};

const Page = () => {
  return (
    <AdminTable
      resource={Resource.PHOTOS}
      columns={columns}
      renderCell={renderCell}
      isEdited={false}
    />
  );
};

export default Page;
