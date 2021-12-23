import {
  Box,
  Card,
  CardMedia,
  List,
  ListItem,
  Slide,
  Typography,
} from "@mui/material";
import { TransitionGroup } from "react-transition-group";

const Portrait2 = require("../assets/portrait2.jpg");

const Story = `I have over 15 years of professional experience in Information Technology (and even longer as an enthusiast). 
My love for computers started with my first computer build in 2001; I was hooked, and this passion grew into a life-long career. 
After years of dabbling in computers as a hobbyist throughout high school, 
I enlisted into the United States Air Force as a Cyber Systems Operations Specialist as my starting point in IT, where I learned virtualization and networking. 
After years of working on infrastructure and networks, I desired to pursue a more creative avenue in IT and make a transition to full-stack engineering. 
When I'm not working with technology, I'm adventurous and passionate about being outdoors with my friends, 
who have endearingly nicknamed me the "Crazy Cat Lady" I adore my three cats, Oscar, Panda, and Ygritte, 
and have even had the opportunity to foster animals in need.`;

const badges = [
  {
    tech: "mongodb",
    link: "https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white",
  },
  {
    tech: "express",
    link: "https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white",
  },
  {
    tech: "reactjs",
    link: "https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white",
  },
  {
    tech: "nodejs",
    link: "https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white",
  },
  {
    tech: "html",
    link: "https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white",
  },
  {
    tech: "css",
    link: "https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white",
  },
  {
    tech: "javascript",
    link: "https://img.shields.io/badge/-Javascript-F7DF1E?logo=javascript&logoColor=white",
  },
  {
    tech: "typescript",
    link: "https://img.shields.io/badge/-Typescript-3178C6?logo=typescript&logoColor=white",
  },
  {
    tech: "mysql",
    link: "https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white",
  },
  {
    tech: "git",
    link: "https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white",
  },
  {
    tech: "bootstrap",
    link: "https://img.shields.io/badge/-Bootstrap-7952B3?logo=bootstrap&logoColor=white",
  },
  {
    tech: "bulma",
    link: "https://img.shields.io/badge/-Bulma-00D1B2?logo=bulma&logoColor=white",
  },
  {
    tech: "mui",
    link: "https://img.shields.io/badge/-MUI-007FFF?logo=mui&logoColor=white",
  },
  {
    tech: "npm",
    link: "https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white",
  },
];

export default function About() {
  return (
    <div>
      <TransitionGroup>
        <Slide direction="right" timeout={1000}>
          {/* Mobile View */}
          <Box
            sx={{
              mt: 6,
              display: { xs: "flex", md: "flex", lg: "none" },
              height: "90vh",
              justifyContent: "center",
              color: "white",
            }}
          >
            <List>
              <ListItem sx={{ justifyContent: "center" }}>
                <Card
                  sx={{
                    bgcolor: "#111111",
                    minWidth: 300,
                    maxWidth: 700,
                    mb: 4,
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={Portrait2}
                  />
                </Card>
              </ListItem>
              <ListItem>
                <Typography variant="h4" sx={{ minWidth: 300, maxWidth: 650 }}>
                  Jef Mitchell
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    pb: 6,
                    minWidth: 300,
                    maxWidth: 650,
                    color: "#8b8b8b",
                    fontStyle: "italic",
                  }}
                >
                  {Story}
                </Typography>
              </ListItem>
              <ListItem>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    minWidth: 300,
                    maxWidth: 650,
                  }}
                >
                  {badges.map((tech) => (
                    <img className="techBadge" src={tech.link} />
                  ))}
                </Box>
              </ListItem>
            </List>
          </Box>
        </Slide>

        <Slide direction="right" timeout={1000}>
          {/* Desktop View */}
          <Box
            sx={{
              display: { xs: "none", md: "none", lg: "flex" },
              height: "100vh",
              marginLeft: "400px",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <List>
              <ListItem sx={{ mt: 6, justifyContent: "center" }}>
                <Card
                  sx={{
                    bgcolor: "#111111",
                    minWidth: 300,
                    maxWidth: 700,
                    mb: 4,
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={Portrait2}
                  />
                </Card>
              </ListItem>
              <ListItem>
                <Typography variant="h4" sx={{ minWidth: 300, maxWidth: 650 }}>
                  Jef Mitchell
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    pb: 6,
                    minWidth: 300,
                    maxWidth: 650,
                    color: "#8b8b8b",
                    fontStyle: "italic",
                  }}
                >
                  {Story}
                </Typography>
              </ListItem>
              <ListItem>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    minWidth: 300,
                    maxWidth: 650,
                  }}
                >
                  {badges.map((tech) => (
                    <img className="techBadge" src={tech.link} />
                  ))}
                </Box>
              </ListItem>
            </List>
          </Box>
        </Slide>
      </TransitionGroup>
    </div>
  );
}
