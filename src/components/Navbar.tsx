import * as React from "react";
import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Home, Person, Work, Drafts } from "@mui/icons-material";

export default function Navbar() {
  return (
    <div>
      <Box
        sx={{
          display: { xs: "none", md: "none", lg: "flex" },
          width: 400,
          height: "100vh",
          bgcolor: "#000000",
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <List>
          <ListItem>
            <Typography variant="h2" sx={{ mb: 1 }}>
              Portfolio
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ justifyContent: "center" }}>
              <Home sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ justifyContent: "center" }}>
              <Person sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ justifyContent: "center" }}>
              <Work sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Work" />
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ justifyContent: "center" }}>
              <Drafts sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Box>
      <AppBar
        position="static"
        sx={{ display: { xs: "block", md: "block", lg: "none" } }}
      >
        <Toolbar sx={{ bgcolor: "#000000" }}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          <Home sx={{ p: 1.5, color: "white" }} />
          <Person sx={{ p: 1.5, color: "white" }} />
          <Work sx={{ p: 1.5, color: "white" }} />
          <Drafts sx={{ p: 1.5, color: "white" }} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
