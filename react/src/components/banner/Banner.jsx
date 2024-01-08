import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner/index";

function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage src="." />
      <BannerContent>
        <Typography variant="h6">New Collection</Typography>
        <BannerTitle variant="h2">Avene</BannerTitle>
        <BannerDescription variant="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          nemo.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}

export default Banner;
