import PropTypes from "prop-types";

Main.propTypes = {
  children: PropTypes.node,
};

function Main({ children }) {
  return (
    <main className="px-4 py-5 bg-[#1E272D] overflow-y-auto">{children}</main>
  );
}

export default Main;
