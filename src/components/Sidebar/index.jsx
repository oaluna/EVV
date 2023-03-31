import * as React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ListSubheader from "@mui/material/ListSubheader";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ViewListIcon from "@mui/icons-material/ViewList";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PeopleOutlined from "@mui/icons-material/PeopleOutlined";
import PeopleOutline from "@mui/icons-material/PeopleOutline";
import Person2Outlined from "@mui/icons-material/Person2Outlined";
import FileOpenOutlined from "@mui/icons-material/FileOpenOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import "./styles.css";

export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setOpen5(!open5);
  };

  return (
    <List
      className="sidebar"
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <div className="sidebar-container">
        <Link to="/">
          <ListItemButton>
            <ListItemIcon>
              <CalendarMonthIcon sx={{ color: "lightblue" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "lightblue" }} primary="Scheduler" />
          </ListItemButton>
        </Link>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <PeopleOutlined sx={{ color: "lightblue" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "lightblue" }} primary="Staff" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListSubheader
              sx={{ backgroundColor: "#333333", position: "relative" }}
            >
              <Link to="/staff/list">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ViewListIcon sx={{ color: "lightblue" }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "lightblue" }} primary="List" />
                </ListItemButton>
              </Link>
            </ListSubheader>
            <ListSubheader
              sx={{ backgroundColor: "#333333", position: "relative" }}
            >
						<Link to="/staff/new">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <NoteAddIcon sx={{ color: "lightblue" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "lightblue" }} primary="New" />
              </ListItemButton>
							</Link>
            </ListSubheader>
            <ListSubheader
              sx={{ backgroundColor: "#333333", position: "relative" }}
            >
              <ListItemButton sx={{ pl: 4 }} onClick={handleClick2}>
                <ListItemIcon>
                  <PeopleOutline sx={{ color: "lightblue" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "lightblue" }} primary="Teams" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListSubheader>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListSubheader sx={{ backgroundColor: "#333333" }}>
                  <ListItemButton sx={{ pl: 8 }}>
                    <ListItemIcon>
                      <ViewListIcon sx={{ color: "lightblue" }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "lightblue" }} primary="List" />
                  </ListItemButton>
                </ListSubheader>
                <ListSubheader sx={{ backgroundColor: "#333333" }}>
                  <ListItemButton sx={{ pl: 8 }}>
                    <ListItemIcon>
                      <NoteAddIcon sx={{ color: "lightblue" }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "lightblue" }} primary="New" />
                  </ListItemButton>
                </ListSubheader>
              </List>
            </Collapse>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick3}>
          <ListItemIcon>
            <Person2Outlined sx={{ color: "lightblue" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "lightblue" }} primary="Clients" />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListSubheader
              sx={{ backgroundColor: "#333333", position: "relative" }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ViewListIcon sx={{ color: "lightblue" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "lightblue" }} primary="List" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <NoteAddIcon sx={{ color: "lightblue" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "lightblue" }} primary="New" />
              </ListItemButton>
            </ListSubheader>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick4}>
          <ListItemIcon>
            <FileOpenOutlined sx={{ color: "lightblue" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "lightblue" }} primary="EVV" />
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListSubheader
              sx={{ backgroundColor: "#333333", position: "relative" }}
            >
<Link to="/reports/list">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ViewListIcon sx={{ color: "lightblue" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "lightblue" }} primary="List" />
              </ListItemButton>
</Link>
            </ListSubheader>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick5}>
          <ListItemIcon>
            <ManageAccountsIcon sx={{ color: "lightblue" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "lightblue" }} primary="Account" />
          {open5 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListSubheader
              sx={{ backgroundColor: "#333333", position: "relative" }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ViewListIcon sx={{ color: "lightblue" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "lightblue" }} primary="List" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <NoteAddIcon sx={{ color: "lightblue" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "lightblue" }} primary="New" />
              </ListItemButton>
            </ListSubheader>
          </List>
        </Collapse>
      </div>
    </List>
  );
}
