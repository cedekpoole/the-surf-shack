import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

function Login() {
  return (
    <main className="bg-[#34434D] min-h-screen flex flex-col gap-10 items-center justify-center">
      <Logo type="large" />
      <LoginForm />
    </main>
  );
}

export default Login;
