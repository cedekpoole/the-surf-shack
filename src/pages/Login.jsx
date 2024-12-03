import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

function Login() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-dark to-[#27333a] overflow-hidden">
      {/* Bubble Effects */}
      <div className="absolute bg-white rounded-full w-2 h-2 opacity-70 animate-bubble left-10 bottom-10"></div>
      <div className="absolute bg-white rounded-full w-3 h-3 opacity-50 animate-bubble left-32 bottom-20"></div>
      <div className="absolute bg-white rounded-full w-1.5 h-1.5 opacity-60 animate-bubble left-64 bottom-14"></div>

      {/* Main Section */}
      <main className="relative z-[2] flex flex-col gap-8 items-center justify-center min-h-screen">
        <Logo type="large" />
        <h1 className="text-2xl font-semibold tracking-wide ">
          Log into your account
        </h1>
        <LoginForm />
      </main>
    </div>
  );
}

export default Login;
