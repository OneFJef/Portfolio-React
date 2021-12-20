import {
  AppBar,
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  BorderBottom,
  DraftsRounded,
  Home,
  InsertDriveFile,
  Person,
  Work,
} from "@mui/icons-material";

const Resume = require("../assets/Resume-Jef_Mitchell.pdf");

const downloadResume = () => {
  const link = document.createElement("a");
  link.download = `Resume-Jef_Mitchell.pdf`;
  link.href = Resume;
  link.click();
};

const WhiteIconButton = styled(IconButton)({
  color: "#ffffff",
  "&:hover": {
    color: "#8b8b8b",
  },
});

const WhiteLink = styled(Link)({
  color: "#ffffff",
  "&:hover": {
    color: "#8b8b8b",
  },
});

export default function Navbar() {
  return (
    <div>
      {/* Mobile View */}
      <AppBar
        position="fixed"
        sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
      >
        <Toolbar sx={{ bgcolor: "#000000" }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>

          <WhiteIconButton
            aria-label="Home Page"
            onClick={() => window.location.replace("/")}
          >
            <Home />
          </WhiteIconButton>
          <WhiteIconButton
            aria-label="About Me"
            onClick={() => window.location.replace("/about")}
          >
            <Person />
          </WhiteIconButton>
          <WhiteIconButton
            aria-label="My Work"
            onClick={() => window.location.replace("/work")}
          >
            <Work />
          </WhiteIconButton>
          <WhiteIconButton
            aria-label="Contact Me"
            onClick={() => window.location.replace("/contact")}
          >
            <DraftsRounded />
          </WhiteIconButton>
          <WhiteIconButton
            aria-label="My Resume"
            onClick={() => {
              downloadResume();
            }}
          >
            <InsertDriveFile />
          </WhiteIconButton>
        </Toolbar>
      </AppBar>

      {/* Desktop View */}
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
          zIndex: 1100,
        }}
      >
        <List>
          <ListItem>
            <Typography variant="h2">Portfolio</Typography>
          </ListItem>

          <ListItem>
            <WhiteLink
              aria-label="Home Page"
              sx={{ display: "contents", color: "white" }}
              onClick={() => window.location.replace("/")}
            >
              <Home sx={{ px: 2 }} />
              <Typography sx={{ pt: 0.5 }}>Home</Typography>
            </WhiteLink>
          </ListItem>

          <ListItem>
            <WhiteLink
              aria-label="About Me"
              sx={{ display: "contents", color: "white" }}
              onClick={() => window.location.replace("/about")}
            >
              <Person sx={{ px: 2 }} />
              <Typography sx={{ pt: 0.5 }}>About</Typography>
            </WhiteLink>
          </ListItem>

          <ListItem>
            <WhiteLink
              aria-label="My Work"
              sx={{ display: "contents", color: "white" }}
              onClick={() => window.location.replace("/work")}
            >
              <Work sx={{ px: 2 }} />
              <Typography sx={{ pt: 0.5 }}>Work</Typography>
            </WhiteLink>
          </ListItem>

          <ListItem>
            <WhiteLink
              aria-label="Contact Me"
              sx={{ display: "contents", color: "white" }}
              onClick={() => window.location.replace("/contact")}
            >
              <DraftsRounded sx={{ px: 2 }} />
              <Typography sx={{ pt: 0.5 }}>Contact</Typography>
            </WhiteLink>
          </ListItem>

          <ListItem>
            <WhiteLink
              aria-label="My Resume"
              sx={{ display: "contents", color: "white" }}
              onClick={() => {
                downloadResume();
              }}
            >
              <InsertDriveFile sx={{ px: 2 }} />
              <Typography sx={{ pt: 0.5 }}>Resume</Typography>
            </WhiteLink>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
