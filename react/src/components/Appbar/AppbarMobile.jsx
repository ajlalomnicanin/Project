import MenuIcon from "@mui/icons-material/Menu";

import SearchIcon from "@mui/icons-material/Search";
import {
  IconButton,
  ListItemButton,
  ListItemIcon,
  TextField,
} from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import Actions from "./Actions";
import { useUIContext } from "../../context/ui";
import AppbarDesktop from "./AppbarDesktop";

export default function AppbarMobile({ matches }) {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h7">
        EleganceHome
      </AppbarHeader>
      <IconButton onClick={() => setShowSearchBox(true)}>
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
