import { Outlet } from "react-router-dom";
import Nav from "../components/shared/Nav";
import SecondNav from "../components/shared/SecondNav";

const MainLayout = () => {
  return (
    <div>
      <div>
        <SecondNav />
      </div>
      <div>
        <Nav />
      </div>
      <div className="h-[200vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
