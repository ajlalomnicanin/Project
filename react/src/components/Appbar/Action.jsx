import { /*Divider,*/ ListItemButton, ListItemIcon } from "@mui/material";
import {
  //   ActionIconsContainerDesktop,
  //   ActionIconsContainerMobile,
  MyList,
} from "../../styles/Appbar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Component } from "react";

function Action({ matches }) {
  //   const Component = matches
  //     ? ActionIconsContainerMobile
  //     : ActionIconsContainerDesktop;

  return (
    <>
      <MyList type="row">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        {/* <Divider orientation="vertical" flexItem /> */}
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && "red",
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        {/* <Divider orientation="vertical" flexItem /> */}
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && "yellow",
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        {/* <Divider orientation="vertical" flexItem /> */}
      </MyList>
    </>
  );
}

export default Action;
