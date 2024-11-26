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
    <div className="border border-[#374151] shadow-sm rounded-sm p-2 flex gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleClick(filter)}
          className={`text-lg font-medium transition-all py-[0.44rem] px-[0.8rem] duration-300 rounded-sm 
            hover:bg-primary hover:text-white ${
              activeFilter === filter ? "bg-primary " : ""
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Filter;
