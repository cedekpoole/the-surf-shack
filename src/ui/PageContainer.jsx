import PropTypes from "prop-types";

PageHeader.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
  operation: PropTypes.node,
};

function PageHeader({ children, header, operation }) {
  const allowTableOperations = Boolean(operation);

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold tracking-wide">{header}</h1>
        {allowTableOperations ? operation : <div></div>}
      </div>
      {children}
    </div>
  );
}

export default PageHeader;
