import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import AccountCircle from "@material-ui/icons/AccountCircle";

import { logout } from "../../redux/authReducer";
import { useDispatch } from "react-redux";
import Index from '../AddCourses'

const useStyles = makeStyles((theme) => ({
  grow: {
    marginBottom: 0,
  },
  icon: {
    fontSize: 40,
    backgroundColor: "#ff5f25",
    color: "white",
    padding: 0,
  },
}));

export default function PrimarySearchAppBar() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <Index/>
      </MenuItem>
      <MenuItem onClick={handleLogout}>Выйти</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <Toolbar className={classes.icon}>
        <div>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            className={classes.icon}
          >
            <AccountCircle className={classes.icon} />
          </IconButton>
        </div>
      </Toolbar>
      {renderMenu}
    </div>
  );
}
