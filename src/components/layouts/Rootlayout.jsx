import { Outlet } from "react-router-dom";
import NavMenu from "../common/NavMenu";

const RootLayout = () => {
  return (
    <div className="grow-0">
      <div className="flex w-screen">
        <div>
          <NavMenu />
        </div>

        {/*children */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
