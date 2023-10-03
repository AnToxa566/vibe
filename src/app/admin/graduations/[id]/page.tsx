"use client";

import { FC } from "react";
import { useQuery } from "react-query";
import { Spinner } from "@nextui-org/react";

import { QueryKey } from "~/common/enums/enums";
import { graduationService } from "~/services/services";
import { GraduationForm } from "../components/graduation-form";

interface Props {
  params: { id: number };
}

const Page: FC<Props> = ({ params }) => {
  const {
    data: graduation,
    isLoading,
    refetch,
  } = useQuery(`${QueryKey.GET_GRADUATION}-${params.id}`, () =>
    graduationService.getOne(params.id)
  );

  const handleUpdate = () => {
    refetch();
  };

  if (isLoading) {
    return <Spinner color="default" />;
  }

  return (
    graduation && (
      <GraduationForm graduation={graduation} onUpdate={handleUpdate} />
    )
  );
};

export default Page;
