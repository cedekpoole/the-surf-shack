import PropTypes from "prop-types";

FormRow.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
};

function FormRow({ label, error, children, orientation = "horizontal" }) {
  const vertical = orientation === "vertical";
  return (
    <div
      className={`grid items-center ${
        vertical
          ? "grid-cols-1 py-2 gap-2 last:mt-2 last:pb-8 first:pt-6 px-5"
          : "py-3 gap-6 grid-cols-[24rem_1fr_1.2fr] border-b border-[#374151] last:border-0"
      }`}
    >
      {label && (
        <label htmlFor={children.props.id} className="font-medium">
          {label}
        </label>
      )}
      {children}
      {error && (
        <span className="text-sm text-secondary-dark min-w-48">{error}</span>
      )}
    </div>
  );
}

export default FormRow;
