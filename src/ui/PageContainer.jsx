import PropTypes from "prop-types";

PageContainer.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
  operation: PropTypes.node,
};

function PageContainer({ children, header, operation }) {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-semibold tracking-wide">{header}</h1>
        {operation ? operation : <div></div>}
      </div>
      {children}
    </div>
  );
}

export default PageContainer;
