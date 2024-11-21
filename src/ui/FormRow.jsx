import PropTypes from "prop-types";

FormRow.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node,
};

function FormRow({ label, error, children }) {
  return (
    <div
      className={`grid items-center gap-6 py-4 grid-cols-[24rem_1fr_1.2fr] border-b border-[#374151] last:border-0`}
    >
      {label && (
        <label htmlFor={children.props.id} className="font-medium">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm text-secondary-dark">{error}</span>}
    </div>
  );
}

export default FormRow;
