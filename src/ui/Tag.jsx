import PropTypes from "prop-types";

Tag.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

function Tag({ type, children }) {
  return (
    <span
      className={`w-fit uppercase text-sm font-medium py-1.5 px-3 rounded-full ${type}`}
    >
      {children}
    </span>
  );
}

export default Tag;
