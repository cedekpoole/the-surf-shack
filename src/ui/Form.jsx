import PropTypes from "prop-types";

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

function Form({ children, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="text-md w-[60rem] border-[1px] border-[#374151] shadow-md px-3 rounded-md"
    >
      {children}
    </form>
  );
}

export default Form;
