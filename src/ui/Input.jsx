import PropTypes from "prop-types";

Input.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  element: PropTypes.oneOf(["input", "textarea"]),
};

function Input({
  type,
  id,
  defaultValue,
  disabled = false,
  element = "input",
}) {
  const fileInput = type === "file";
  const textArea = element === "textarea";
  const className = `rounded-md border border-[#374151] bg-slate-300 shadow-sm focus:outline-none focus:ring-2 text-[#242424] focus:ring-[#374151] transition-all duration-300`;

  if (textArea) {
    return (
      <textarea
        className={`${className} px-3 py-2 h-32`}
        id={id}
        disabled={disabled}
      />
    );
  }

  return (
    <input
      className={`${className} px-4 py-2`}
      id={id}
      type={type}
      defaultValue={defaultValue}
      disabled={disabled}
    />
  );
}

export default Input;
