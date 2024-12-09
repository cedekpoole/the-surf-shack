import Logout from "../features/authentication/Logout";
import Logo from "./Logo";

function Header() {
  return (
    <header className="col-span-2 shadow-lg">
      <div className="flex items-center justify-between mx-10">
        <Logo />
        <Logout />
      </div>
    </header>
  );
}

export default Header;
