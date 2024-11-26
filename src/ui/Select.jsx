import PropTypes from "prop-types";

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

function Select({ options, value, onChange }) {
  return (
    <select
      onChange={onChange}
      value={value}
      className="text-md py-[0.8rem] px-4 rounded-md font-medium shadow-sm bg-[#34434D] "
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
