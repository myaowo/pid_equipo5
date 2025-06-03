import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";


const MainLayout = () => {
  return (
    <>
      <Header />
      <Box sx={{ pt: "40px" }} >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
