"use client";

import { FC } from "react";
import { useQuery } from "react-query";
import { Spinner } from "@nextui-org/react";

import { QueryKey } from "~/common/enums/enums";
import { barberService } from "~/services/services";
import { BarberForm } from "../components/barber-form";

interface Props {
  params: { id: number };
}

const Page: FC<Props> = ({ params }) => {
  const {
    data: barber,
    isLoading,
    refetch,
  } = useQuery(`${QueryKey.GET_BARBER}-${params.id}`, () =>
    barberService.getOne(params.id)
  );

  const handleUpdate = () => {
    refetch();
  };

  if (isLoading) {
    return <Spinner color="default" />;
  }

  return barber && <BarberForm barber={barber} onUpdate={handleUpdate} />;
};

export default Page;
