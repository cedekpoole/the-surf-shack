import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Button from "../../ui/Button";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, loading } = useLogout();
  return (
    <Button style="primary" onClick={logout} disabled={loading}>
      <span className="text-2xl">
        <HiArrowRightOnRectangle />
      </span>
    </Button>
  );
}

export default Logout;
