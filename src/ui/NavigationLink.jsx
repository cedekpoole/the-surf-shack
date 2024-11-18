import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

NavigationLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

function NavigationLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-2xl tracking-wide uppercase px-3 py-5 flex gap-3 items-center rounded hover:bg-[#1E272D] transition-colors duration-300 ${
          isActive ? "bg-[#1E272D] hover:bg-[#1E272D]" : ""
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default NavigationLink;
