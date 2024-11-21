import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function CreateCabinForm() {
  const { register, handleSubmit, reset } = useForm();
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

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Name">
        <Input id="name" type="text" {...register("name")} />
      </FormRow>

      <FormRow label="Maximum Capacity">
        <Input id="maxCapacity" type="number" {...register("maxCapacity")} />
      </FormRow>

      <FormRow label="Regular Price">
        <Input id="regularPrice" type="number" {...register("regularPrice")} />
      </FormRow>

      <FormRow label="Discount">
        <Input
          id="discount"
          type="number"
          defaultValue={0}
          {...register("discount")}
        />
      </FormRow>

      <FormRow label="Description for the website">
        <Input
          element="textarea"
          id="description"
          {...register("description")}
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
