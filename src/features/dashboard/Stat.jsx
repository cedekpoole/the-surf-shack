import PropTypes from "prop-types";

Stat.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string.isRequired,
};

function Stat({ icon, title, value, color }) {
  return (
    <div className="p-6 grid grid-cols-[4.3rem_1fr] grid-rows-[auto_auto] gap-x-4 gap-y-1 rounded-lg shadow-md bg-[#34434D]">
      <div
        className={`row-span-2 flex items-center justify-center aspect-square rounded-full bg-${color}-100`}
      >
        <span className={`text-4xl text-${color}-700`}>{icon}</span>
      </div>
      <h5 className="self-end text-xs font-semibold tracking-wide uppercase text-gray-300">
        {title}
      </h5>
      <p className="text-2xl font-medium leading-none">{value}</p>
    </div>
  );
}

export default Stat;
