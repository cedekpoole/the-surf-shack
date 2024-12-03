import PropTypes from "prop-types";

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  type: PropTypes.string,
};

function Form({ children, onSubmit, type }) {
  return (
    <form
      onSubmit={onSubmit}
      type={type}
      className={`text-md border-[1px] border-[#374151] shadow-md px-3 rounded-md ${
        type === "modal" ? "w-[60rem]" : "w-[40rem]"
      }`}
    >
      {children}
    </form>
  );
}

export default Form;
