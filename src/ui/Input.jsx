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
      className="rounded-md border border-slate-500 px-34 py-2 bg-slate-300 shadow-sm focus:outline-none focus:ring-1 text-[#242424] focus:ring-slate-500 transition-all duration-300"
      id={id}
      type={type}
      defaultValue={defaultValue}
      disabled={disabled}
    />
  );
}

export default Input;
