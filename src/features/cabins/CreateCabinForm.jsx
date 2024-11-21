import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function CreateCabinForm() {
  const { register, handleSubmit } = useForm();

  return (
    <Form>
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
        <Button type="submit" style="primary">
          Create Cabin
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
