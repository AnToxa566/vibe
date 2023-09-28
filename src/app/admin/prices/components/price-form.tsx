import { FC } from "react";
import { toast } from "react-toastify";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useMutation, useQuery } from "react-query";
import { useForm, SubmitHandler } from "react-hook-form";

import { QueryKey } from "~/common/enums/enums";
import { Form } from "../../components/form/form";
import {
  barbershopService,
  graduationService,
  priceService,
  serviceService,
} from "~/services/services";
import { ICreatePrice, IPrice } from "~/common/interfaces/interfaces";

interface Props {
  price?: IPrice;
}

export interface PriceFields {
  value: number;
  service: string;
  barbershop: string;
  graduation: string;
}

const PriceForm: FC<Props> = ({ price }) => {
  const { register, handleSubmit } = useForm<PriceFields>({
    mode: "onChange",
  });

  const { data: services, isLoading: servicesLoading } = useQuery(
    QueryKey.GET_SERVICES,
    serviceService.getAll
  );

  const { data: barbershops, isLoading: barbershopsLoading } = useQuery(
    QueryKey.GET_BARBERSHOPS,
    barbershopService.getAll
  );

  const { data: graduations, isLoading: graduationsLoading } = useQuery(
    QueryKey.GET_GRADUATIONS,
    graduationService.getAll
  );

  const { mutate: addPrice, isLoading: addLoading } = useMutation(
    QueryKey.ADD_PRICE,
    (data: ICreatePrice) => priceService.create(data),
    {
      onSuccess() {
        toast.success("Price added!");
      },
      onError() {
        toast.error("Something went wrong!");
      },
    }
  );

  const { mutate: updatePrice, isLoading: updateLoading } = useMutation(
    QueryKey.EDIT_PRICE,
    (data: ICreatePrice) => priceService.update(data, price?.id ?? 0),
    {
      onSuccess() {
        toast.success("Price updated!");
      },
      onError() {
        toast.error("Something went wrong!");
      },
    }
  );

  const onSubmit: SubmitHandler<PriceFields> = (data) => {
    const payload = {
      value: Number(data.value),
      service: { id: Number(data.service) },
      barbershop: { id: Number(data.barbershop) },
      graduation: { id: Number(data.graduation) },
    };

    if (!price) {
      addPrice(payload);
    } else {
      updatePrice(payload);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      isUpdate={!!price}
      isLoading={addLoading || updateLoading}
    >
      <Input
        type="number"
        label="Value"
        placeholder="Enter price's value"
        defaultValue={price?.value.toString() ?? ""}
        isRequired
        isClearable
        {...register("value", { required: true })}
      />

      <Select
        label="Service"
        placeholder="Select a service"
        defaultSelectedKeys={[price?.service.id.toString() ?? ""]}
        isRequired
        isLoading={servicesLoading}
        {...register("service", { required: true })}
      >
        {services
          ? services.map((it) => (
              <SelectItem key={it.id} value={it.id}>
                {`${it.title} ${it.subtitle ? `(${it.subtitle})` : ""}`}
              </SelectItem>
            ))
          : []}
      </Select>

      <Select
        label="Barbershop"
        placeholder="Select a barbershop"
        defaultSelectedKeys={[price?.barbershop.id.toString() ?? ""]}
        isRequired
        isLoading={barbershopsLoading}
        {...register("barbershop", { required: true })}
      >
        {barbershops
          ? barbershops.map((it) => (
              <SelectItem key={it.id} value={it.id}>
                {it.address}
              </SelectItem>
            ))
          : []}
      </Select>

      <Select
        label="Graduation"
        placeholder="Select a graduation"
        defaultSelectedKeys={[price?.graduation.id.toString() ?? ""]}
        isRequired
        isLoading={graduationsLoading}
        {...register("graduation", { required: true })}
      >
        {graduations
          ? graduations.map((it) => (
              <SelectItem key={it.id} value={it.id}>
                {it.title}
              </SelectItem>
            ))
          : []}
      </Select>
    </Form>
  );
};

export { PriceForm };
