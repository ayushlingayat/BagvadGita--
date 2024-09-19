import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Topbar />

      <Outlet />

      <Footer />
    </>
  );
};

export default Root;
