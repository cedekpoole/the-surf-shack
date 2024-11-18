import Logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="col-span-2">
      <div className="flex items-center justify-between mx-5 shadow-lg">
        <img src={Logo} alt="Logo" className="w-44 h-24" />
        <h1>App Layout</h1>
      </div>
    </header>
  );
}

export default Header;
