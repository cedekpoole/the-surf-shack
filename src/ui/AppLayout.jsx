import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <h1>WHAT IS UP</h1>
      <Outlet />
    </div>
  );
}

export default AppLayout;
