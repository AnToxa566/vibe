import { FC } from "react";
import { toast } from "react-toastify";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useMutation, useQuery } from "react-query";
import { useForm, SubmitHandler } from "react-hook-form";

import { QueryKey } from "~/common/enums/enums";
import { Form } from "../../components/form/form";
import {
  barberService,
  barbershopService,
  graduationService,
} from "~/services/services";
import { IBarber } from "~/common/interfaces/interfaces";

interface Props {
  barber?: IBarber;
}

export interface BarberFields {
  name: string;
  barbershop: string;
  graduation: string;
  images: FileList;
}

const BarberForm: FC<Props> = ({ barber }) => {
  const { register, handleSubmit } = useForm<BarberFields>({
    mode: "onChange",
  });

  const { data: barbershops, isLoading: barbershopsLoading } = useQuery(
    QueryKey.GET_BARBERSHOPS,
    barbershopService.getAll
  );

  const { data: graduations, isLoading: graduationsLoading } = useQuery(
    QueryKey.GET_GRADUATIONS,
    graduationService.getAll
  );

  const { mutate: addBarber } = useMutation(
    QueryKey.ADD_BARBER,
    (data: FormData) => barberService.create(data),
    {
      onSuccess() {
        toast.success("Barber added!");
      },
      onError() {
        toast.error("Something went wrong!");
      },
    }
  );

  const { mutate: updateBarber } = useMutation(
    QueryKey.EDIT_BARBER,
    (data: FormData) => barberService.update(data, barber?.id ?? 0),
    {
      onSuccess() {
        toast.success("Barber updated!");
      },
      onError() {
        toast.error("Something went wrong!");
      },
    }
  );

  const onSubmit: SubmitHandler<BarberFields> = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("barbershopId", data.barbershop);
    formData.append("graduationId", data.graduation);
    formData.append("image", data.images[0]);

    if (!barber) {
      addBarber(formData);
    } else {
      updateBarber(formData);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} isUpdate={!!barber}>
      <Input
        type="text"
        label="Name"
        placeholder="Enter barber name"
        defaultValue={barber?.name ?? ""}
        isRequired
        isClearable
        {...register("name", { required: true })}
      />

      <Select
        label="Barbershop"
        placeholder="Select a barbershop"
        defaultSelectedKeys={[barber?.barbershop.id.toString() ?? ""]}
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
        defaultSelectedKeys={[barber?.graduation.id.toString() ?? ""]}
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

      <Input
        type="file"
        accept="image/*"
        label="Image"
        placeholder="Select image of barber"
        isRequired={!barber}
        isClearable
        {...register("images", { required: !barber })}
      />
    </Form>
  );
};

export { BarberForm };
