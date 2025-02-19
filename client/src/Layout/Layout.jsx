import Header from "./Header";
import Bottom from "../Components/Bottom";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="w-screen h-screen overflow-y-scroll font-[poppins]">
      <Header />

      <main className=" w-full mt-[60px] min-h-[calc(100%-60px)] flex flex-col md:flex-row items-center justify-center p-4">

        <Outlet />
        <Bottom />
      </main>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default Layout;
