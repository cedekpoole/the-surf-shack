import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser({ fullName, avatar });
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <Form type="large" onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input type="email" id="email" disabled defaultValue={email} />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          id="fullName"
          onChange={(e) => setFullName(e.target.value)}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Avatar image">
        <Input
          type="file"
          id="image"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow>
        <div></div>
        <Button type="reset" style="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="submit" style="primary" disabled={isUpdating}>
          Update user data
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
