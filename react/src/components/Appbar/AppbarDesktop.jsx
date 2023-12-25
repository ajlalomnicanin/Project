import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/Appbar";
import Action from "./Action";

function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>Hey</AppbarHeader>
      {/* <ListItemButton>
        <ListItemIcon>
          <Search />
        </ListItemIcon>
      </ListItemButton> */}
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Product" />
        <ListItemText primary="Categories" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact" />
      </MyList>
      <Action />
    </AppbarContainer>
  );
}

export default AppbarDesktop;
