import { IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
// import "@fontsource/montez";
import { Colors } from "../../theme/Theme";
import { textPopUpTop } from "../../animation";

// import { textPopUpTop } from "../../animation";

export const AppbarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
  background: Colors.white_y,
  "& .active": {
    textShadow: `1px 1px 2px ${theme.palette.primary.dark}`, // Efekat senke teksta za aktivnu stavku
  },
}));

export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "3em",
  fontFamily: '"Montez", "cursive"',
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)", // Prilagodi vrednosti prema potrebama
  color: Colors.secondary,
  "&:hover": {
    animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
  },
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  position: "fixed",
  alignItems: "center",
  zIndex: 2,
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,
}));
