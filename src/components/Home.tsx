import * as React from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Portrait = require("../assets/portrait-gray.jpg");

const Quote = "Full-Stack Developer with a passion for solving problems."

export default function Home() {
  return (
    <div>
      {/* Desktop View */}
      <Box
        sx={{
          display: { xs: "none", md: "none", lg: "flex" },
          height: "100vh",
          position: "relative",
          marginLeft: "400px",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Avatar
          alt="Jef Mitchell"
          src={Portrait}
          sx={{ width: 200, height: 200 }}
        />
        <List>
          <ListItem>
            <Typography variant="h2">Jef Mitchell</Typography>
          </ListItem>
          <ListItem>
            <Typography sx={{ color: "#8b8b8b", fontStyle: "italic" }}>
              {Quote}
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ color: "white" }}>
              <GitHubIcon sx={{ fontSize: 30, pr: 1.5 }} />
              <LinkedInIcon sx={{ fontSize: 30, pr: 1.5 }} />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>

      {/* Mobile View */}
      <Box
        sx={{
          display: { xs: "flex", md: "flex", lg: "none" },
          height: "100vh",
          position: "relative",
          marginTop: "-64px",
          mx: 1,
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <List>
          <ListItemAvatar sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              alt="Jef Mitchell"
              src={Portrait}
              sx={{m:1, width: 200, height: 200 }}
            />
          </ListItemAvatar>
          <ListItem sx={{ justifyContent: "center" }}>
            <Typography variant="h2">Jef Mitchell</Typography>
          </ListItem>
          <ListItem>
            <Typography sx={{ color: "#8b8b8b", fontStyle: "italic" }}>
              {Quote}
            </Typography>
          </ListItem>
          <ListItem sx={{ justifyContent: "center" }}>
            <ListItemIcon sx={{ color: "white" }}>
              <GitHubIcon sx={{ fontSize: 30, pr: 1.5 }} />
              <LinkedInIcon sx={{ fontSize: 30, pr: 1.5 }} />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
