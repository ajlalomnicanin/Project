import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";
import { Colors } from "../../theme/Theme";

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));

export const SubscribeTf = styled(TextField)(() => ({
  ".MuiInputLabel-root": {
    color: "#03045e",
  },

  ".MuiInput-root::before": {
    borderBottom: `1px solid #03045e`,
  },
}));
