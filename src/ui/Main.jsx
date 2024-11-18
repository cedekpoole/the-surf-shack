import PropTypes from "prop-types";

Main.propTypes = {
  children: PropTypes.node,
};

function Main({ children }) {
  return <main className="px-4 py-3 bg-[#1E272D]">{children}</main>;
}

export default Main;
