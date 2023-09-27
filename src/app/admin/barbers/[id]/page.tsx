"use client";

import { FC } from "react";
import { useQuery } from "react-query";

import { QueryKey } from "~/common/enums/enums";
import { barberService } from "~/services/services";
import { BarberForm } from "../components/barber-form";

interface Props {
  params: { id: number };
}

const Page: FC<Props> = ({ params }) => {
  const { data: barber, isLoading } = useQuery(
    `${QueryKey.GET_BARBER}-${params.id}`,
    () => barberService.getOne(params.id)
  );

  if (isLoading) {
    return <>Loading...</>;
  }

  return barber && <BarberForm barber={barber} />;
};

export default Page;
