import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    background: "#010205",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    background: "#010205",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  iconButton: {
    color: "white",
  },
  hide: {
    visibility: "hidden",
  },
}));

export default function SideDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, classes.paper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <ListItem button onClick={handleDrawer} className={classes.iconButton}>
          {!open ? <MenuIcon /> : <ChevronLeftIcon />}
        </ListItem>
        <Divider />
        <List>
          <Link to="/">
            <ListItem button className={classes.iconButton}>
              <HomeIcon />
              <ListItemText className={clsx({ [classes.hide]: !open })}>
                Home
              </ListItemText>
            </ListItem>
          </Link>
          <Link to="/dashboard">
            <ListItem button className={classes.iconButton}>
              <DashboardIcon />
              <ListItemText className={clsx({ [classes.hide]: !open })}>
                Scores
              </ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
}
