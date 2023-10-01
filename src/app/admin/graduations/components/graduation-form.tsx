import { FC } from "react";
import { toast } from "react-toastify";
import { Input } from "@nextui-org/react";
import { useMutation } from "react-query";
import { useForm, SubmitHandler } from "react-hook-form";

import { QueryKey } from "~/common/enums/enums";
import { Form } from "../../components/form/form";
import { graduationService } from "~/services/services";
import {
  ICreateGraduation,
  IGraduation,
} from "~/common/interfaces/graduation/graduation.interface";

interface Props {
  graduation?: IGraduation;
}

export interface GraduationFields {
  title: string;
}

const GraduationForm: FC<Props> = ({ graduation }) => {
  const { register, handleSubmit } = useForm<GraduationFields>({
    mode: "onChange",
  });

  const { mutate: addGraduation, isLoading: addLoading } = useMutation(
    QueryKey.ADD_GRADUATION,
    (data: ICreateGraduation) => graduationService.create(data),
    {
      onSuccess() {
        toast.success("Graduation added!");
      },
      onError() {
        toast.error("Something went wrong!");
      },
    }
  );

  const { mutate: updateGraduation, isLoading: updateLoading } = useMutation(
    QueryKey.EDIT_GRADUATION,
    (data: ICreateGraduation) =>
      graduationService.update(data, graduation?.id ?? 0),
    {
      onSuccess() {
        toast.success("Graduation updated!");
      },
      onError() {
        toast.error("Something went wrong!");
      },
    }
  );

  const onSubmit: SubmitHandler<GraduationFields> = (data) => {
    if (!graduation) {
      addGraduation(data);
    } else {
      updateGraduation(data);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      isUpdate={!!graduation}
      isLoading={addLoading || updateLoading}
    >
      <Input
        type="text"
        label="Title"
        placeholder="Enter graduation's title"
        defaultValue={graduation?.title ?? ""}
        isRequired
        isClearable
        {...register("title", { required: true })}
      />
    </Form>
  );
};

export { GraduationForm };
