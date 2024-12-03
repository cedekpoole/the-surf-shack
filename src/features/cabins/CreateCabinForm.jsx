import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import PropTypes from "prop-types";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

CreateCabinForm.propTypes = {
  cabin: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    maxCapacity: PropTypes.number,
    name: PropTypes.string,
    regularPrice: PropTypes.number,
    discount: PropTypes.number,
  }),
  onCloseModal: PropTypes.func,
};

function CreateCabinForm({ cabin = {}, onCloseModal }) {
  const { createCabin, isCreating } = useCreateCabin();
  const { editCabin, isEditing } = useEditCabin();

  const isWorking = isCreating || isEditing;

  const { id: editId, ...editedCabin } = cabin;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editedCabin : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image =
      typeof data.image === "object" && data.image.length > 0
        ? data.image[0]
        : editedCabin.image;
    if (isEditSession)
      editCabin(
        { cabin: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCabin(
        { ...data, image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    console.warn("Validation error!", errors);
  }

  return (
    <Form type="modal" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          id="name"
          type="text"
          disabled={isWorking}
          {...register("name", {
            required: "Name is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input
          id="maxCapacity"
          type="number"
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
          {...register("description", {
            required: "Description is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin Photo" error={errors?.image?.message}>
        <Input
          id="image"
          type="file"
          disabled={isWorking}
          {...register("image", {
            required: isEditSession ? false : "Image is required",
          })}
        />
      </FormRow>

      <FormRow>
        <div></div>
        <Button
          onClick={() => onCloseModal?.()}
          disabled={isWorking}
          style="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button disabled={isWorking} type="submit" style="primary">
          {isEditSession ? "Update Cabin" : "Create Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
