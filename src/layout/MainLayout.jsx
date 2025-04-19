import React from "react";
import { Outlet } from "react-router";
import Navber from "../Component/Navber";
import Footer from "../Component/Footer";

const MainLayout = () => {
  return (
    <>
      <Navber />
      <div className=" min-h-[calc(100vh-116px)]">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
