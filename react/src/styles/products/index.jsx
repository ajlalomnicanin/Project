import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { slideInRight } from "../../animation";
import Theme, { Colors } from "../../theme/Theme";

export const Product = styled(Box)(({ theme }) => ({
  marginTop: "30px",
  background: Colors.white_y,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  boxShadow:
    "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
  padding: theme.spacing(2), // Adjust the padding based on your needs
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "300px",
  height: "250px",
  padding: "10px",

  [theme.breakpoints.down("md", "sm")]: {
    width: "80%",
    padding: "24px",
  },
}));

export const ProductTitle = styled(Typography)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: Colors.secondary,
  fontSize: "1.5rem",
  fontWeight: "bold",
  transition: "text-shadow 0.3s ease-in-out",
  "&:hover": {
    textShadow:
      "0 0 8px rgba(0, 0, 255, 0.5), 0 0 16px rgba(0, 0, 255, 0.4), 0 0 24px rgba(0, 0, 255, 0.3)",
  },
}));

export const ProductText = styled(Typography)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "300px",
  height: "80px",
  padding: " 0px 15px ",
  color: Colors.black,
  fontSize: "1.0rem",
  padding: "15px 0",
  textAlign: "justify",
}));

export const ProductPrice = styled(Typography)(() => ({
  color: Colors.secondary,
  fontSize: "1.5rem",
  fontWeight: "bold",
  transition: "text-shadow 0.3s ease-in-out",
  "&:hover": {
    textShadow:
      "0 0 8px rgba(0, 0, 255, 0.5), 0 0 16px rgba(0, 0, 255, 0.4), 0 0 24px rgba(0, 0, 255, 0.3)",
  },
}));
// export const ProductAddToCart = styled(Button, {
//   shouldForwardProp: (prop) => prop !== "show",
// })(({ show, theme }) => ({
//   width: "120px",
//   fontSize: "12px",
//   [theme.breakpoints.up("md")]: {
//     position: "absolute",
//     bottom: "2%",
//     width: "300px",
//     padding: "10px 5px",
//     animation:
//       show &&
//       `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
//   },
//   background: Colors.secondary,
//   opacity: 0.9,
// }));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ProductActionsWrapper = styled(Box)(({ show, theme }) => {
  console.log(show, theme);
  return {
    [theme.breakpoints.up("md")]: {
      display: show ? "visible" : "none",
      position: "absolute",
      right: 0,
      top: "20%",
      animation:
        show &&
        `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },
  };
});
