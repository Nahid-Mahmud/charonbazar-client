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
      <div className="lg:max-w-[86rem] max-w-[95vw] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
