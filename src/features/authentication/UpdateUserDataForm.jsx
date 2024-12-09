import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function UpdateUserDataForm() {
  return (
    <Form type="large">
      <FormRow label="Email address">
        <Input type="email" id="email" />
      </FormRow>
      <FormRow label="Full name">
        <Input type="text" id="fullName" />
      </FormRow>
      <FormRow label="Avatar image">
        <Input type="file" id="image" />
      </FormRow>
      <FormRow>
        <div></div>
        <Button type="reset" style="secondary">
          Cancel
        </Button>
        <Button type="submit" style="primary">
          Update user data
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
