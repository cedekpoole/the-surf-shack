import PropTypes from "prop-types";

Input.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
};

function Input({ type, id, defaultValue, disabled = false }) {
  return (
    <input
      className="rounded-md border border-[#374151] px-4 py-2 bg-slate-300 shadow-sm focus:outline-none focus:ring-2 text-[#242424] focus:ring-[#374151] transition-all duration-300"
      id={id}
      type={type}
      defaultValue={defaultValue}
      disabled={disabled}
    />
  );
}

export default Input;
