import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/NavBar/Navbar";
import { useEffect } from "react";

const Root = () => {
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = "Home";
    } else {
      document.title = `${loc.pathname.replace("/", "")}`;
    }
    if (loc.state) {
      document.title = `${loc.state}`;
    }
  }, [loc.pathname]);
  return (
    <div className="max-w-[1300px] mx-auto">
      <Navbar></Navbar>
      <div className="py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
