import PropTypes from "prop-types";
import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      type,
      id,
      defaultValue,
      disabled = false,
      element = "input",
      onBlur,
      ...props
    },
    ref
  ) => {
    const fileInput = type === "file";
    const textArea = element === "textarea";
    const className = `rounded-md border border-[#374151] bg-slate-300 shadow-sm focus:outline-none focus:ring-2 text-[#242424] focus:ring-[#374151] transition-all duration-300`;

    if (textArea) {
      return (
        <textarea
          ref={ref}
          className={`${className} px-3 py-2 h-32 resize-none`}
          id={id}
          disabled={disabled}
          {...props}
        />
      );
    }
    if (fileInput) {
      return (
        <input
          ref={ref}
          type={type}
          id={id}
          disabled={disabled}
          accept="image/*"
          className="text-base file:font-medium file:px-3 file:py-2 file:mr-3 file:rounded-md file:border-0 file:text-white file:bg-primary file:cursor-pointer file:transition-colors file:hover:bg-primary-light"
          {...props}
        />
      );
    }

    return (
      <input
        ref={ref}
        className={`${className} px-4 py-2`}
        id={id}
        type={type}
        defaultValue={defaultValue}
        disabled={disabled}
        onBlur={onBlur}
        {...props}
      />
    );
  }
);

Input.propTypes = {
  type: PropTypes.oneOf(["text", "number", "password", "email", "file"]),
  id: PropTypes.string,
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  element: PropTypes.oneOf(["input", "textarea"]),
  onBlur: PropTypes.func,
};

Input.displayName = "Input";

export default Input;
