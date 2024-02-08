import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner/index";
import { Colors } from "../../theme/Theme";

function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage />
      <BannerContent>
        <Typography variant="h7" style={{ paddingLeft: "70px" }}>
          FURNITURE STORE
        </Typography>
        <BannerTitle variant="h2">
          Elegance <br />
          <span
            style={{
              marginLeft: "150px",
              marginBottom: "50px",
              color: Colors.secondary,
            }}
          >
            Home
          </span>
        </BannerTitle>
        <BannerDescription variant="subtitle">
          Elegance Home, your go-to destination for exquisite furniture and
          decor, invites you to experience the epitome of style and comfort.
          Explore our curated selection that seamlessly blends sophistication
          with functionality.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}

export default Banner;
