import PropTypes from "prop-types";

PageHeader.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
  filter: PropTypes.bool,
};

function PageHeader({ children, header, filter = true }) {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-semibold tracking-wide">{header}</h1>
        {filter ? <button>Filter / Sort</button> : <div></div>}
      </div>
      {children}
    </div>
  );
}

export default PageHeader;
