import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../theme/Theme";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center", // Centriranje sadržaja vertikalno
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  background: Colors.white_y,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 420,
  padding: "30px",
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  backgroundImage: `url(https://i.pinimg.com/564x/12/13/61/121361caca80231d6f2f3acf9d855d33.jpg )`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left center",
  backgroundSize: "cover",
  width: "400px",
  height: "520px",
  margin: "30px",
  borderRadius: " 0 30px 0 30px",
  boxShadow: "0px 20px 30px -10px rgba(38, 57, 77, 1)",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  fontSize: "72px",
  marginBottom: "20px",
  textShadow:
    "0px 22px 70px rgba(0, 0, 0, 0.56), 4px 4px 4px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  letterSpacing: 1.5,
  marginBottom: "3em",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

// export const BannerShopButton = styled(Button, {
//   // Configure which props should be forwarded on DOM
//   shouldForwardProp: (prop) => prop !== "color",
//   name: "MyShopButton",
//   slot: "Root",
//   // We are specifying here how the styleOverrides are being applied based on props
//   overridesResolver: (props, styles) => [
//     styles.root,
//     props.color === "primary" && styles.primary,
//     props.color === "secondary" && styles.secondary,
//   ],
// })(({ theme }) => ({
//   padding: "20px 0px",
//   color: Colors.white,
//   fontWeight: "bold",
//   fontSize: "16px",
//   [theme.breakpoints.down("sm")]: {
//     padding: "10px 0px",
//     fontSize: "14px",
//   },
// }));
