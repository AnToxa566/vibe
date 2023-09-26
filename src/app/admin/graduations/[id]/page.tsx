"use client";

import { FC } from "react";
import { useQuery } from "react-query";

import { QueryKey } from "~/common/enums/enums";
import { graduationService } from "~/services/services";
import { GraduationForm } from "../components/graduation-form";

interface Props {
  params: { id: number };
}

const Page: FC<Props> = ({ params }) => {
  const { data: graduation, isLoading } = useQuery(
    `${QueryKey.GET_GRADUATION}-${params.id}`,
    () => graduationService.getOne(params.id)
  );

  if (isLoading) {
    return <>Loading...</>;
  }

  return graduation && <GraduationForm graduation={graduation} />;
};

export default Page;
