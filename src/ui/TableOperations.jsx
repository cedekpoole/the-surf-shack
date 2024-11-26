import PropTypes from "prop-types";

TableOperations.propTypes = {
  children: PropTypes.node,
};

function TableOperations({ children }) {
  return <div className="flex items-center gap-6">{children}</div>;
}

export default TableOperations;
