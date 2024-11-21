import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();

  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: (cabin) => createCabin(cabin),
    onSuccess: () => {
      toast.success("Cabin successfully created!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    console.error(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          id="name"
          type="text"
          {...register("name", {
            required: "Name is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input
          id="maxCapacity"
          type="number"
          {...register("maxCapacity", {
            required: "Max capacity is required",
            min: {
              value: 1,
              message: "Capacity must be at least 1",
            },
            max: {
              value: 100,
              message: "Capacity cannot be over 100",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          id="regularPrice"
          type="number"
          {...register("regularPrice", {
            required: "Price is required",
            min: {
              value: 1,
              message: "Price must be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          id="discount"
          type="number"
          defaultValue={0}
          {...register("discount", {
            required: "Can't be empty, make it at least 0",
            validate: (value) =>
              +getValues().regularPrice >= +value ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for the website"
        error={errors?.description?.message}
      >
        <Input
          element="textarea"
          id="description"
          {...register("description", {
            required: "Description is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin Photo">
        <Input id="image" type="file" {...register("image")} />
      </FormRow>

      <FormRow>
        <div></div>
        <Button style="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating} type="submit" style="primary">
          Create Cabin
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
