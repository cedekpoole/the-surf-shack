import Logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="flex items-center justify-between mx-5">
      <img src={Logo} alt="Logo" className="w-44 h-24" />
      <h1>App Layout</h1>
    </header>
  );
}

export default Header;
