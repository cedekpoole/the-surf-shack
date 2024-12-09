import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function SignupForm() {
  return (
    <Form>
      <FormRow label="Full name" error={""}>
        <Input type="text" id="fullName" />
      </FormRow>
      <FormRow label="Email address" error={""}>
        <Input type="email" id="email" />
      </FormRow>
      <FormRow label="Password (min 8 characters)" error={""}>
        <Input type="password" id="password" />
      </FormRow>
      <FormRow label="Repeat password" error={""}>
        <Input type="password" id="passwordConfirm" />
      </FormRow>
      <FormRow>
        <Button type="submit" style="primary">
          Sign up new user
        </Button>
        <Button type="reset" style="secondary">
          Cancel
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
