import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AppbarDesktop({ matches }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isCategoriesPage = location.pathname === "/Categories";
  const isProductsPage = location.pathname === "/Products";

  // Active state
  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">My Bags</AppbarHeader>
      <MyList type="row">
        <ListItemText
          primary="Home"
          onClick={() => {
            navigate("/");
          }}
        />
        <ListItemText
          primary="Categories"
          onClick={() => {
            navigate("/categories");
          }}
        />
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
