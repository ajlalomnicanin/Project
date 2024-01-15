// import { useToken } from "../theme/Theme";
import Promotions from "../components/promotions";
import Banner from "../components/banner/Banner";
import { Box, Typography } from "@mui/material";
import Products from "../components//products/index";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Banner />
      <Promotions />
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
        <Typography variant="h4">Our Products</Typography>
      </Box>
      <Products />
      <Footer />
    </>
  );
}

export default Home;
