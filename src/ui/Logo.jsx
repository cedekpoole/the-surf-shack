import LogoImg from "../assets/logo.svg";
import PropTypes from "prop-types";

Logo.propTypes = {
  type: PropTypes.oneOf(["small", "medium", "large"]),
};

function Logo({ type = "medium" }) {
  const size = {
    small: "w-20 h-10",
    medium: "w-44 h-24",
    large: "w-64 h-32",
  };
  return <img src={LogoImg} alt="logo" className={`${size[type]}`} />;
}

export default Logo;
