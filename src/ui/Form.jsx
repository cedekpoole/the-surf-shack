import PropTypes from "prop-types";

Form.propTypes = {
  children: PropTypes.node,
};

function Form({ children }) {
  return <form className="overflow-hidden text-md w-[50rem]">{children}</form>;
}

export default Form;
