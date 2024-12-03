import PropTypes from "prop-types";

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  id: PropTypes.number,
  children: PropTypes.node,
};

function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <div className="flex gap-4">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`h-6 w-6 outline-offset-2 transform origin-center disabled:cursor-not-allowed accent-secondary-light`}
      />
      <label
        htmlFor={!disabled ? id : ""}
        className="flex flex-1 items-center gap-2 cursor-pointer"
      >
        {children}
      </label>
    </div>
  );
}

export default Checkbox;
