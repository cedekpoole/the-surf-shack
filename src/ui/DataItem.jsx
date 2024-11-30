import PropTypes from "prop-types";

DataItem.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  icon: PropTypes.node,
};

function DataItem(icon, label, children) {
  return (
    <div className="flex items-center gap-6 py-3">
      <span className="flex items-center gap-3 font-medium text-lg">
        {icon}
        <span>{label}</span>
      </span>
      {children}
    </div>
  );
}

export default DataItem;
