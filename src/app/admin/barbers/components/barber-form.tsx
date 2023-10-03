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
import { IBarber } from "~/common/interfaces/barber/barber.interface";

interface Props {
  barber?: IBarber;
  onUpdate?: () => void;
}

export interface BarberFields {
  name: string;
  altegioId: string;
  barbershop: string;
  graduation: string;
  images: FileList;
}

const BarberForm: FC<Props> = ({ barber, onUpdate = () => {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BarberFields>({
    mode: "onChange",
  });

  const { data: barbershops } = useQuery(
    QueryKey.GET_BARBERSHOPS,
    barbershopService.getAll
  );

  const { data: graduations } = useQuery(
    QueryKey.GET_GRADUATIONS,
    graduationService.getAll
  );

  const { mutate: addBarber, isLoading: addLoading } = useMutation(
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

  const { mutate: updateBarber, isLoading: updateLoading } = useMutation(
    QueryKey.EDIT_BARBER,
    (data: FormData) => barberService.update(data, barber?.id ?? 0),
    {
      onSuccess() {
        toast.success("Barber updated!");
        onUpdate();
      },
      onError() {
        toast.error("Something went wrong!");
      },
    }
  );

  const onSubmit: SubmitHandler<BarberFields> = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("altegioId", data.altegioId);
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
    barbershops &&
    graduations && (
      <Form
        onSubmit={handleSubmit(onSubmit)}
        isUpdate={!!barber}
        isLoading={addLoading || updateLoading}
      >
        <Input
          type="text"
          label="Name"
          placeholder="Enter barber's name"
          defaultValue={barber?.name ?? ""}
          isRequired
          isClearable
          {...register("name", { required: true })}
        />

        <Input
          type="number"
          label="Altegio ID"
          placeholder="Enter altegio id"
          defaultValue={barber?.altegioId.toString() ?? ""}
          isRequired
          isClearable
          {...register("altegioId", { required: true })}
        />

        <Select
          label="Barbershop"
          placeholder="Select a barbershop"
          defaultSelectedKeys={[barber?.barbershop.id.toString() ?? ""]}
          isRequired
          {...register("barbershop", { required: true })}
        >
          {barbershops.map((it) => (
            <SelectItem key={it.id} value={it.id}>
              {it.address}
            </SelectItem>
          ))}
        </Select>

        <Select
          label="Graduation"
          placeholder="Select a graduation"
          defaultSelectedKeys={[barber?.graduation.id.toString() ?? ""]}
          isRequired
          {...register("graduation", { required: true })}
        >
          {graduations.map((it) => (
            <SelectItem key={it.id} value={it.id}>
              {it.title}
            </SelectItem>
          ))}
        </Select>
        {errors.graduation && <span>{errors.graduation.message}</span>}

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
    )
  );
};

export { BarberForm };
