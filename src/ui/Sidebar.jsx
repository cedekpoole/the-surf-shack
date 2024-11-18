import NavigationLink from "./NavigationLink";
import { FaHome, FaUserAstronaut } from "react-icons/fa";
import { GiSurfBoard } from "react-icons/gi";
import { LuCalendarRange } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";

function Sidebar() {
  return (
    <aside className="mt-5 p-3 space-y-4">
      <NavigationLink to="dashboard">
        <FaHome />
        Home
      </NavigationLink>
      <NavigationLink to="bookings">
        <LuCalendarRange />
        Bookings
      </NavigationLink>
      <NavigationLink to="cabins">
        <GiSurfBoard />
        Cabins
      </NavigationLink>
      <NavigationLink to="users">
        <FaUserAstronaut />
        Users
      </NavigationLink>
      <NavigationLink to="settings">
        <MdOutlineSettings />
        Settings
      </NavigationLink>
    </aside>
  );
}

export default Sidebar;
