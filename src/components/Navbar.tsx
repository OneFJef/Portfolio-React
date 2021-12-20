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
  Drafts,
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

          <WhiteIconButton onClick={() => window.location.replace("/")}>
            <Home />
          </WhiteIconButton>
          <WhiteIconButton onClick={() => window.location.replace("/about")}>
            <Person />
          </WhiteIconButton>
          <WhiteIconButton onClick={() => window.location.replace("/work")}>
            <Work />
          </WhiteIconButton>
          <WhiteIconButton onClick={() => window.location.replace("/contact")}>
            <DraftsRounded />
          </WhiteIconButton>
          <WhiteIconButton
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
        }}
      >
        <List>
          <ListItem>
            <Typography variant="h2">Portfolio</Typography>
          </ListItem>

          <ListItem>
            <Link
              sx={{ display: "contents", color: "white" }}
              onClick={() => window.location.replace("/")}
            >
              <Home sx={{ px: 2 }} />
              <Typography>Home</Typography>
            </Link>
          </ListItem>

          <ListItem>
            <Link
              sx={{ display: "contents", color: "white" }}
              onClick={() => window.location.replace("/about")}
            >
              <Person sx={{ px: 2 }} />
              <Typography>About</Typography>
            </Link>
          </ListItem>

          <ListItem>
            <Link
              sx={{ display: "contents", color: "white" }}
              onClick={() => window.location.replace("/work")}
            >
              <Work sx={{ px: 2 }} />
              <Typography>Work</Typography>
            </Link>
          </ListItem>

          <ListItem>
            <Link
              sx={{ display: "contents", color: "white" }}
              onClick={() => window.location.replace("/contact")}
            >
              <DraftsRounded sx={{ px: 2 }} />
              <Typography>Contact</Typography>
            </Link>
          </ListItem>

          <ListItem>
            <Link
              sx={{ display: "contents", color: "white" }}
              onClick={() => {
                downloadResume();
              }}
            >
              <InsertDriveFile sx={{ px: 2 }} />
              <Typography>Resume</Typography>
            </Link>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
