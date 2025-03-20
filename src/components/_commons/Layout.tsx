import { Outlet } from "react-router";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className=" min-h-screen relative">
      <header className=" bg-gray-100 z-10">
        <Navigation />
      </header>

      <main className=" container mx-auto p-4 mb-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
