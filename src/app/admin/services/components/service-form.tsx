import { FC } from "react";
import { toast } from "react-toastify";
import { Input } from "@nextui-org/react";
import { useMutation } from "react-query";
import { useForm, SubmitHandler } from "react-hook-form";

import { QueryKey } from "~/common/enums/enums";
import { Form } from "../../components/form/form";
import { serviceService } from "~/services/services";
import {
  ICreateService,
  IService,
} from "~/common/interfaces/service/service.interface";

interface Props {
  service?: IService;
  onUpdate?: () => void;
}

export interface ServiceFields {
  title: string;
  priority: number;
  subtitle?: string;
}

const ServiceForm: FC<Props> = ({ service, onUpdate = () => {} }) => {
  const { register, handleSubmit } = useForm<ServiceFields>({
    mode: "onChange",
  });

  const { mutate: addService, isLoading: addLoading } = useMutation(
    QueryKey.ADD_SERVICE,
    (data: ICreateService) => serviceService.create(data),
    {
      onSuccess() {
        toast.success("Service added!");
      },
      onError() {
        toast.error("Something went wrong!");
      },
    }
  );

  const { mutate: updateService, isLoading: updateLoading } = useMutation(
    QueryKey.EDIT_SERVICE,
    (data: ICreateService) => serviceService.update(data, service?.id ?? 0),
    {
      onSuccess() {
        toast.success("Service updated!");
        onUpdate();
      },
      onError() {
        toast.error("Something went wrong!");
      },
    }
  );

  const onSubmit: SubmitHandler<ServiceFields> = (data) => {
    data.subtitle = data.subtitle || undefined;
    data.priority = Number(data.priority);

    if (!service) {
      addService(data);
    } else {
      updateService(data);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      isUpdate={!!service}
      isLoading={addLoading || updateLoading}
    >
      <Input
        type="text"
        label="Title"
        placeholder="Enter service's title"
        defaultValue={service?.title ?? ""}
        isRequired
        isClearable
        {...register("title", { required: true })}
      />

      <Input
        type="number"
        label="Priority"
        placeholder="Enter service's priority"
        defaultValue={service?.priority.toString() ?? ""}
        isRequired
        isClearable
        {...register("priority", { required: true })}
      />

      <Input
        type="text"
        label="Subtitle"
        placeholder="Enter service's subtitle"
        defaultValue={service?.subtitle ?? ""}
        isClearable
        {...register("subtitle")}
      />
    </Form>
  );
};

export { ServiceForm };
