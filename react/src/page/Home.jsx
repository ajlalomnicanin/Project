// import { useToken } from "../theme/Theme";
import Promotions from "../components/promotions";
import Banner from "../components/banner/Banner";
import { Box, Typography } from "@mui/material";


function Home() {
  return (
    <>
      <Banner />
      <Promotions />
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
        <Typography variant="h4">Our Products</Typography>
      </Box>
      <Products />
      <h1>he</h1>
    </>
  );
}

export default Home;
