import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";

function CreateCabinForm() {
  return (
    <Form>
      <FormRow label="Name">
        <input id="name" type="text" />
      </FormRow>

      <FormRow label="Maximum Capacity">
        <input id="maxCapacity" type="number" />
      </FormRow>

      <FormRow label="Regular Price">
        <input id="regularPrice" type="number" />
      </FormRow>

      <FormRow label="Discount">
        <input id="discount" type="number" defaultValue={0} />
      </FormRow>

      <FormRow label="Description for the website">
        <textarea id="description" />
      </FormRow>

      <FormRow label="Image">
        <input id="image" type="file" accept="image/*" />
      </FormRow>

      <FormRow>
        <button type="reset">Cancel</button>
        <button>Create Cabin</button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
