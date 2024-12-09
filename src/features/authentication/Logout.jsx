import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Button from "../../ui/Button";

function Logout() {
  return (
    <Button style="primary">
      <span className="text-2xl">
        <HiArrowRightOnRectangle />
      </span>
    </Button>
  );
}

export default Logout;
