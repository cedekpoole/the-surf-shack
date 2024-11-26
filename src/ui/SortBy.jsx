import PropTypes from "prop-types";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

SortBy.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return <Select options={options} onChange={handleChange} value={sortBy} />;
}

export default SortBy;
