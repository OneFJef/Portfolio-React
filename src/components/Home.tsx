import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  Slide,
  styled,
  Typography,
} from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Portrait1 = require("../assets/portrait1.jpg");

const Quote = "Full-Stack Developer with a passion for solving problems.";

const Github = "https://github.com/OneFJef";
const LinkedIn = "https://www.linkedin.com/in/jefmitchell/";

const WhiteIconButton = styled(IconButton)({
  color: "#ffffff",
  "&:hover": {
    color: "#8b8b8b",
  },
});

export default function Home() {
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
              mx: 1,
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <List>
              <ListItemAvatar
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Avatar
                  alt="Jef Mitchell"
                  src={Portrait1}
                  sx={{ m: 1, width: 200, height: 200 }}
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
                <ListItemIcon>
                  <WhiteIconButton
                    onClick={() => {
                      window.open(Github);
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: 30 }} />
                  </WhiteIconButton>
                  <WhiteIconButton
                    onClick={() => {
                      window.open(LinkedIn);
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: 30 }} />
                  </WhiteIconButton>
                </ListItemIcon>
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
            <Avatar
              alt="Jef Mitchell"
              src={Portrait1}
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
                <ListItemIcon>
                  <WhiteIconButton
                    onClick={() => {
                      window.open(Github);
                    }}
                  >
                    {/* <GitHubIcon sx={{ fontSize: 30 }} />
                  </WhiteIconButton>
                  <WhiteIconButton
                    onClick={() => {
                      window.open(LinkedIn);
                    }}
                  > */}
                    <LinkedInIcon sx={{ fontSize: 30 }} />
                  </WhiteIconButton>
                </ListItemIcon>
              </ListItem>
            </List>
          </Box>
        </Slide>
      </TransitionGroup>
    </div>
  );
}
