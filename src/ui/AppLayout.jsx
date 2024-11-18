import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

function AppLayout() {
  return (
    <div className="bg-[#556168] font-montserrat text-stone-50 h-screen grid grid-rows-[auto_1fr] grid-cols-[26rem_1fr]">
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
