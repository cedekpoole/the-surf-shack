import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUser } from "./useUser";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Form type="large" onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input type="email" id="email" disabled defaultValue={email} />
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
