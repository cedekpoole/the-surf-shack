import PropTypes from "prop-types";

Form.propTypes = {
  children: PropTypes.node,
};

function Form({ children }) {
  return (
    <form className="overflow-hidden text-md w-[60rem] border-[1px] border-[#374151] shadow-md px-3 rounded-md">
      {children}
    </form>
  );
}

export default Form;
