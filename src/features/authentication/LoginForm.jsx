import { useState } from "react";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {}

  return (
    <div className="bg-[#1E272D] rounded-lg">
      <Form onSubmit={handleSubmit}>
        <FormRow label="Email Address" orientation="vertical">
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </FormRow>
        <FormRow label="Password" orientation="vertical">
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </FormRow>
        <FormRow orientation="vertical">
          <Button type="submit" className="btn-primary">
            Log In
          </Button>
        </FormRow>
      </Form>
    </div>
  );
}

export default LoginForm;
