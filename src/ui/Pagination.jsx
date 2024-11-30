import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Button from "./Button";

function Pagination() {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-lg mr-5">
        Showing <span className="font-semibold">1</span> to{" "}
        <span className="font-semibold">10</span> of{" "}
        <span className="font-semibold">23</span> results
      </p>
      <div className="flex gap-2">
        <Button style="secondaryAlternative">
          <span className="text-lg pr-2">
            <HiChevronLeft />
          </span>
          Previous
        </Button>
        <Button style="secondaryAlternative">
          Next
          <span className="text-lg pl-2">
            <HiChevronRight />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
