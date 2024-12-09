import { useState } from "react";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

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
            disabled={loading}
          />
        </FormRow>
        <FormRow label="Password" orientation="vertical">
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            disabled={loading}
          />
        </FormRow>
        <FormRow orientation="vertical">
          <Button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Loading..." : "Log in"}
          </Button>
        </FormRow>
      </Form>
    </div>
  );
}

export default LoginForm;
