import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { Link, useLocation, useNavigate } from "react-router-dom";

// const menuItems = [
//   { label: "Home", path: "/", key: "1" },
//   { label: "Categories", path: "/categories", key: "2" },
//   { label: "Products", path: "/Products", key: "3" },
//   { label: "About us", path: "/AboutUs", key: "4" },
//   { label: "Contact us", path: "/ContactUs", key: "5" },
// ];

// export default function AppbarDesktop({ matches }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const activeKey =
//     menuItems.find((item) => location.pathname.startsWith(item.path))?.key ||
//     "1";
//   // const isCategoriesPage = location.pathname === "/Categories";
//   // const isProductsPage = location.pathname === "/Products";
//   // const isAboutUsPage = location.pathname === "/AboutUs";
//   // const isContactUsPage = location.pathname === "/ContactUs";

//   // Active state
//   return (
//     <AppbarContainer>
//       <AppbarHeader variant="h4">EleganceHome</AppbarHeader>
//       <MyList type="row">
//         {menuItems.map((item) => (
//           <ListItemText
//             key={item.key}
//             primary={item.label}
//             onClick={() => navigate(item.path)}
//             className={activeKey === item.key ? "active" : ""}
//           />
//         ))}

//         <ListItemText
//           primary="Home"
//           onClick={() => {
//             navigate("/");
//           }}
//         />
//         <ListItemText
//           primary="Categories"
//           onClick={() => {
//             navigate("/categories");
//           }}
//         />
//         <ListItemText primary="Products" />
//         <ListItemText
//           primary="About us"
//           onClick={() => {
//             navigate("/AboutUs");
//           }}
//         />
//         <ListItemText
//           primary="Contact us"
//           onClick={() => {
//             navigate("/ContactUs");
//           }}
//         />
//         <ListItemButton>
//           <ListItemIcon>
//             <SearchIcon />
//           </ListItemIcon>
//         </ListItemButton>
//       </MyList>
//       <Actions matches={matches} />
//     </AppbarContainer>
//   );
// }

const menuItems = [
  { label: "Home", path: "/", key: "1" },
  { label: "Categories", path: "/categories", key: "2" },
  { label: "Products", path: "/Products", key: "3" },
  { label: "About us", path: "/AboutUs", key: "4" },
  { label: "Contact us", path: "/ContactUs", key: "5" },
];

export default function AppbarDesktop({ matches }) {
  const navigate = useNavigate();
  const location = useLocation();

  const activeKey =
    menuItems.find((item) => location.pathname === item.path)?.key || "1";

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">EleganceHome</AppbarHeader>
      <MyList type="row">
        {menuItems.map((item) => (
          <ListItemText
            key={item.key}
            primary={item.label}
            onClick={() => navigate(item.path)}
            className={activeKey === item.key ? "active" : ""}
          />
        ))}
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
