import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

function Button({
  children,
  style = "primary",
  type = "button",
  disabled = false,
  onClick = () => {},
  className = "",
}) {
  const base =
    "flex items-center justify-center rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#374151] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50";

  const styleClasses = {
    primary:
      base +
      " bg-primary tracking-wide uppercase hover:bg-primary-light hover:font-medium hover:scale-105 text-[#F9FAFB]",
    secondary: base + " hover:bg-[#34434D] border-[1px] border-[#374151]",
    secondaryAlternative: base + " hover:bg-[#1E272D] shadow-none",
    danger:
      base +
      " bg-[#EF4444] hover:bg-[#F87171] uppercase tracking-wide hover:font-medium hover:scale-105",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styleClasses[style]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
