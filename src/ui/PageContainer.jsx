import PropTypes from "prop-types";

PageHeader.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
};

function PageHeader({ children, header }) {
  return (
    <div className="p-4">
      <div className="flex justify-between mb-3">
        <h1 className="text-3xl font-semibold tracking-wide">{header}</h1>
        <button>Filter / Sort</button>
      </div>
      {children}
    </div>
  );
}

export default PageHeader;
