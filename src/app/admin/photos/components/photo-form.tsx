import { toast } from "react-toastify";
import { Input } from "@nextui-org/react";
import { useMutation } from "react-query";
import { useForm, SubmitHandler } from "react-hook-form";

import { QueryKey } from "~/common/enums/enums";
import { Form } from "../../components/form/form";
import { photoService } from "~/services/services";

export interface PhotoFields {
  images: FileList;
}

const PhotoForm = () => {
  const { register, handleSubmit } = useForm<PhotoFields>({
    mode: "onChange",
  });

  const { mutate: addPhoto, isLoading: addLoading } = useMutation(
    QueryKey.ADD_PHOTO,
    (data: FormData) => photoService.create(data),
    {
      onSuccess() {
        toast.success("Photo added!");
      },
      onError() {
        toast.error("Something went wrong!");
      },
    }
  );

  const onSubmit: SubmitHandler<PhotoFields> = (data) => {
    const formData = new FormData();
    formData.append("image", data.images[0]);

    addPhoto(formData);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      isUpdate={false}
      isLoading={addLoading}
    >
      <Input
        type="file"
        accept="image/*"
        label="Image"
        placeholder="Select image of barber"
        isRequired
        isClearable
        {...register("images", { required: true })}
      />
    </Form>
  );
};

export { PhotoForm };
