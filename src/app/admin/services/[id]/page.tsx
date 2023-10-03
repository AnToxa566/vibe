"use client";

import { FC } from "react";
import { useQuery } from "react-query";
import { Spinner } from "@nextui-org/react";

import { QueryKey } from "~/common/enums/enums";
import { serviceService } from "~/services/services";
import { ServiceForm } from "../components/service-form";

interface Props {
  params: { id: number };
}

const Page: FC<Props> = ({ params }) => {
  const {
    data: service,
    isLoading,
    refetch,
  } = useQuery(`${QueryKey.GET_SERVICE}-${params.id}`, () =>
    serviceService.getOne(params.id)
  );

  const handleUpdate = () => {
    refetch();
  };

  if (isLoading) {
    return <Spinner color="default" />;
  }

  return service && <ServiceForm service={service} onUpdate={handleUpdate} />;
};

export default Page;
