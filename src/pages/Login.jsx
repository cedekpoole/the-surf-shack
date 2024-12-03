import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

function Login() {
  return (
    <main className="bg-[#34434D] min-h-screen flex flex-col gap-8 items-center justify-center">
      <Logo type="large" />
      <h1 className="text-2xl font-semibold tracking-wide">
        Log into your account
      </h1>
      <LoginForm />
    </main>
  );
}

export default Login;
