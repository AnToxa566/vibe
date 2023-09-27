"use client";

import { FC } from "react";
import { useQuery } from "react-query";

import { QueryKey } from "~/common/enums/enums";
import { serviceService } from "~/services/services";
import { ServiceForm } from "../components/service-form";

interface Props {
  params: { id: number };
}

const Page: FC<Props> = ({ params }) => {
  const { data: service, isLoading } = useQuery(
    `${QueryKey.GET_SERVICE}-${params.id}`,
    () => serviceService.getOne(params.id)
  );

  if (isLoading) {
    return <>Loading...</>;
  }

  return service && <ServiceForm service={service} />;
};

export default Page;
