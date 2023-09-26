import { FC } from "react";
import { toast } from "react-toastify";
import { Input } from "@nextui-org/react";
import { useMutation } from "react-query";
import { useForm, SubmitHandler } from "react-hook-form";

import { QueryKey } from "~/common/enums/enums";
import { Form } from "../../components/form/form";
import { barbershopService } from "~/services/services";
import { IBarbershop, ICreateBarbershop } from "~/common/interfaces/interfaces";

interface Props {
  barbershop?: IBarbershop;
}

export interface BarbershopFields {
  lat: number;
  lng: number;
  address: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  schedule: string;
}

const BarbershopForm: FC<Props> = ({ barbershop }) => {
  const { register, handleSubmit } = useForm<BarbershopFields>({
    mode: "onChange",
  });

  const { mutate: addBarbershop } = useMutation(
    QueryKey.ADD_BARBERSHOP,
    (data: ICreateBarbershop) => barbershopService.create(data),
    {
      onSuccess() {
        toast.success("Barbershop added!");
      },
      onError() {
        toast.error("Something went wrong!");
      },
    }
  );

  const { mutate: updateBarbershop } = useMutation(
    QueryKey.EDIT_BARBERSHOP,
    (data: ICreateBarbershop) =>
      barbershopService.update(data, barbershop?.id ?? 0),
    {
      onSuccess() {
        toast.success("Barbershop updated!");
      },
      onError(err) {
        console.log(err);
        toast.error("Something went wrong!");
      },
    }
  );

  const onSubmit: SubmitHandler<BarbershopFields> = (data) => {
    const payload = {
      address: data.address,
      schedule: data.schedule,
      lat: Number(data.lat),
      lng: Number(data.lng),
      phoneNumbers: [data.firstPhoneNumber, data.secondPhoneNumber],
    };

    if (!barbershop) {
      addBarbershop(payload);
    } else {
      updateBarbershop(payload);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} isUpdate={!!barbershop}>
      <Input
        type="text"
        label="Address"
        placeholder="Enter barbershops' address"
        defaultValue={barbershop?.address ?? ""}
        isRequired
        isClearable
        {...register("address", { required: true })}
      />

      <Input
        type="number"
        label="Latitude"
        placeholder="Enter latitude"
        defaultValue={barbershop?.lat.toString() ?? ""}
        step="any"
        isRequired
        isClearable
        {...register("lat", { required: true, min: -90, max: 90 })}
      />

      <Input
        type="number"
        label="Longitude"
        placeholder="Enter longitude"
        defaultValue={barbershop?.lng.toString() ?? ""}
        step="any"
        isRequired
        isClearable
        {...register("lng", { required: true, min: -180, max: 180 })}
      />

      <Input
        type="text"
        label="First phone number"
        placeholder="Enter phone number"
        defaultValue={barbershop?.phoneNumbers[0] ?? ""}
        isRequired
        isClearable
        {...register("firstPhoneNumber", { required: true })}
      />

      <Input
        type="text"
        label="Second phone number"
        placeholder="Enter phone number"
        defaultValue={barbershop?.phoneNumbers[1] ?? ""}
        isRequired
        isClearable
        {...register("secondPhoneNumber", { required: true })}
      />

      <Input
        type="text"
        label="Schedule"
        placeholder="Enter barbershops' schedule"
        defaultValue={barbershop?.schedule ?? ""}
        isRequired
        isClearable
        {...register("schedule", { required: true })}
      />
    </Form>
  );
};

export { BarbershopForm };
