import PropTypes from "prop-types";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

Modal.propTypes = {
  children: PropTypes.node,
};

Open.propTypes = {
  children: PropTypes.node,
  opens: PropTypes.string,
};

Window.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

const modalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <modalContext.Provider value={{ open, close, openName }}>
      {children}
    </modalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(modalContext);
  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(modalContext);
  if (name !== openName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen bg-primary-dark/30 backdrop-blur-sm z-[1000] transition-all duration-500">
      <div className="fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-[#1E272D] rounded-lg shadow-lg py-10 px-12">
        <button
          onClick={close}
          className="bg-none border-none p-[0.4rem] rounded-lg translate-x-[0.8rem] transition-all duration-200 absolute top-3 right-6 hover:bg-gray-100"
        >
          <span className="text-lg text-gray-500">
            <HiXMark />
          </span>
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}
Modal.Open = Open;
Modal.Window = Window;
export default Modal;
