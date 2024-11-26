import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";

Menus.propTypes = {
  children: PropTypes.node,
};
Menu.propTypes = {
  children: PropTypes.node,
};
Toggle.propTypes = {
  id: PropTypes.number,
};
List.propTypes = {
  id: PropTypes.number,
  position: PropTypes.object,
  children: PropTypes.node,
};
Button.propTypes = {
  children: PropTypes.node,
};

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider value={{ openId, open, close }}>
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return <div className="flex items-center justify-end">{children}</div>;
}

function Toggle({ id }) {
  const { openId, close, open } = useContext(MenusContext);
  function handleClick() {
    openId === "" || openId !== id ? open(id) : close();
  }
  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-sm transform translate-x-3 transition-all duration-200 hover:bg-gray-100"
    >
      <HiEllipsisVertical />
    </button>
  );
}

function List({ id, children }) {
  const { openId } = useContext(MenusContext);

  if (openId !== id) return null;

  return createPortal(
    <ul className={`fixed bg-[#1E272D] rounded-sm shadow-md right-3 top-3`}>
      {children}
    </ul>,
    document.body
  );
}

function Button({ children }) {
  return (
    <li>
      <button className="w-full py-2 px-4 text-left hover:bg-primary-light">
        {children}
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
