import MenuBar from "../MenuBar";
import { Outlet } from "react-router";
import Footer from "../Footer";
import TopBar from "../TopBar";

const RootLayout = () => {
  return (
    <>
      <TopBar />
      <MenuBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
