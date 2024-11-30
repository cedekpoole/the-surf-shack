import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Button from "./Button";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

Pagination.propTypes = {
  count: PropTypes.number,
};

const PAGE_SIZE = 10;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (count <= PAGE_SIZE) return null;
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-md ml-5">
        Showing{" "}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-semibold">{count}</span> results
      </p>
      <div className="flex gap-2">
        <Button
          onClick={previousPage}
          style="secondaryAlternative"
          disabled={currentPage === 1}
        >
          <span className="text-lg pr-2">
            <HiChevronLeft />
          </span>
          Previous
        </Button>
        <Button
          onClick={nextPage}
          style="secondaryAlternative"
          disabled={currentPage === pageCount}
        >
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
