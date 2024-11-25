import PropTypes from "prop-types";
import { HiXMark } from "react-icons/hi2";

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

function Modal({ children, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-primary-dark/30 backdrop-blur-sm z-[1000] transition-all duration-500">
      <div className="fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-[#1E272D] rounded-lg shadow-lg py-10 px-12">
        <button
          onClick={onClose}
          className="bg-none border-none p-[0.4rem] rounded-lg translate-x-[0.8rem] transition-all duration-200 absolute top-3 right-6 hover:bg-gray-100"
        >
          <span className="text-lg text-gray-500">
            <HiXMark />
          </span>
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
