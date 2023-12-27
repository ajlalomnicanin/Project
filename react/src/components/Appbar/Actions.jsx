import { Divider, ListItemButton, ListItemIcon, useTheme } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MyList } from "../../styles/appbar";

export default function Actions({ matches }) {
  const theme = useTheme();

  return (
    <MyList
      type="row"
      sx={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: matches ? "fixed" : "relative",
        bottom: matches ? 0 : "unset",
      }}
    >
      <ListItemButton>
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
            color: matches ? theme.palette.secondary.main : undefined,
          }}
        >
          <ShoppingCartIcon />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
      <ListItemButton>
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
            color: matches ? theme.palette.secondary.main : undefined,
          }}
        >
          <FavoriteIcon />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
      <ListItemButton>
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
            color: matches ? theme.palette.secondary.main : undefined,
          }}
        >
          <PersonIcon />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
    </MyList>
  );
}
