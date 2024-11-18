import Logo from "./Logo";

function Header() {
  return (
    <header className="col-span-2 shadow-lg">
      <div className="flex items-center justify-between mx-10">
        <Logo />
        <h1>App Layout</h1>
      </div>
    </header>
  );
}

export default Header;
