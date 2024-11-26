import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "No discount", "With discount"];

  function handleClick(value) {
    setActiveFilter(value);

    const urlValue =
      value === "All"
        ? value.toLowerCase()
        : value.toLowerCase().replace(" ", "-");

    searchParams.set("discount", urlValue);
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
