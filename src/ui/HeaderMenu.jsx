import { HiOutlineUser } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <ul className="flex gap-2 items-center">
      <li>
        <Button style="secondary" onClick={() => navigate("/account")}>
          <span className="text-2xl transform hover:scale-105">
            <HiOutlineUser />
          </span>
        </Button>
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
