import PropTypes from "prop-types";

FormRow.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
};

function FormRow({ label, error, children, orientation = "horizontal" }) {
  const isVertical = orientation === "vertical";

  return (
    <div
      className={`grid items-center gap-${isVertical ? "2" : "6"} py-3 ${
        isVertical
          ? ""
          : "grid-cols-[24rem_1fr_1.2fr] border-b border-gray-100 last:border-0"
      }`}
    >
      {label && (
        <label htmlFor={children.props.id} className="font-md">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  );
}

export default FormRow;
