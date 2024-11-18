import Logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="col-span-2 shadow-lg">
      <div className="flex items-center justify-between mx-5">
        <img src={Logo} alt="Logo" className="w-44 h-20" />
        <h1>App Layout</h1>
      </div>
    </header>
  );
}

export default Header;
