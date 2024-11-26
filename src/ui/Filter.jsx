import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

Filter.propTypes = {
  filterField: PropTypes.string,
  options: PropTypes.array,
};

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = options;

  const activeFilter =
    options.find(
      (filter) =>
        searchParams.get(filterField) ===
        filter.toLowerCase().replace(/\s+/g, "-") // Match URL format
    ) || options[0];

  function handleClick(value) {
    const urlValue = value.toLowerCase().replace(/\s+/g, "-");

    searchParams.set(filterField, urlValue);
    setSearchParams(searchParams);
  }
  return (
    <div className="bg-[#34434D] border border-[#374151] shadow-sm rounded-md p-1 flex gap-1.5">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleClick(filter)}
          className={`text-md font-medium transition-all py-[0.44rem] px-[0.8rem] duration-300 rounded-md 
            hover:bg-primary hover:text-white disabled:cursor-not-allowed ${
              activeFilter === filter ? "bg-primary " : ""
            }`}
          disabled={activeFilter === filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Filter;
