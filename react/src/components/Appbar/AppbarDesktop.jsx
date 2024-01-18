import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  appBarClasses,
} from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { searchProducts } from "../../slices/search";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const menuItems = [
  { label: "Home", path: "/", key: "1" },
  { label: "Categories", path: "/categories", key: "2" },
  { label: "About us", path: "/AboutUs", key: "4" },
  { label: "Contact us", path: "/ContactUs", key: "5" },
  { path: "/search", key: "6" },
  { path: "/products", key: "7" },
];

export default function AppbarDesktop({ matches }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { q } = useParams();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const handleSearchChange = (event) => {
    const newValue = event.target.value;

    if (newValue.trim() !== "") {
      setSearch(newValue);
      navigate("/search/" + newValue);
      dispatch(searchProducts(newValue));
    } else {
      navigate("/");
    }
  };
  const activeKey =
    menuItems.find(
      (item) => location.pathname.includes(item.path) && item.key !== "1"
    )?.key || "1";
  console.log(activeKey);

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">EleganceHome</AppbarHeader>
      <MyList type="row">
        {menuItems.map((item) => (
          <ListItemText
            key={item.key}
            primary={item.label}
            onClick={() => navigate(`${item.path}`)}
            className={activeKey === item.key ? "active" : ""}
          />
        ))}
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <TextField
            placeholder="Search"
            variant="standard" // or "outlined" or "filled"
            size="small"
            onChange={handleSearchChange}
            defaultValue={search}
            style={{
              width: 200,
            }} // or "medium" or "large"
          />
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
