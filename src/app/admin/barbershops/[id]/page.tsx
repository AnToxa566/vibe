"use client";

import { FC } from "react";
import { useQuery } from "react-query";
import { Spinner } from "@nextui-org/react";

import { QueryKey } from "~/common/enums/enums";
import { barbershopService } from "~/services/services";
import { BarbershopForm } from "../components/barbershop-form";

interface Props {
  params: { id: number };
}

const Page: FC<Props> = ({ params }) => {
  const {
    data: barbershop,
    isLoading,
    refetch,
  } = useQuery(`${QueryKey.GET_BARBERSHOP}-${params.id}`, () =>
    barbershopService.getOne(params.id)
  );

  const handleUpdate = () => {
    refetch();
  };

  if (isLoading) {
    return <Spinner color="default" />;
  }

  return (
    barbershop && (
      <BarbershopForm barbershop={barbershop} onUpdate={handleUpdate} />
    )
  );
};

export default Page;
