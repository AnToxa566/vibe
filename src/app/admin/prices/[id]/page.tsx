"use client";

import { FC } from "react";
import { useQuery } from "react-query";
import { Spinner } from "@nextui-org/react";

import { QueryKey } from "~/common/enums/enums";
import { priceService } from "~/services/services";
import { PriceForm } from "../components/price-form";

interface Props {
  params: { id: number };
}

const Page: FC<Props> = ({ params }) => {
  const {
    data: price,
    isLoading,
    refetch,
  } = useQuery(`${QueryKey.GET_PRICE}-${params.id}`, () =>
    priceService.getOne(params.id)
  );

  const handleUpdate = () => {
    refetch();
  };

  if (isLoading) {
    return <Spinner color="default" />;
  }

  return price && <PriceForm price={price} onUpdate={handleUpdate} />;
};

export default Page;
