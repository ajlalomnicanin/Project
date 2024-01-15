// import { useToken } from "../theme/Theme";
import Promotions from "../components/promotions";
import Banner from "../components/banner/Banner";
import { AppBar, Box, Container, Stack, ThemeProvider, Typography } from "@mui/material";
import Products from "../components//products/index";
import Footer from "../components/footer";
import AppDrawer from "../components/drawer";
import { UIProvider } from "../context/ui";
import Theme from "../theme/Theme";

function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <AppBar />
            <Banner />
            <Promotions />
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Our Products</Typography>
            </Box>
            <Products />
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
