import PropTypes from "prop-types";

Main.propTypes = {
  children: PropTypes.node,
};

function Main({ children }) {
  return (
    <main className="text-[#f1f1f1] min-h-[92dvh] container mx-auto bg-[#1E272D]">
      {children}
    </main>
  );
}

export default Main;
