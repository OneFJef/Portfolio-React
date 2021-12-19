import {
  AppBar,
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
            <Typography variant="h2" sx={{ mb: 1 }}>
              Portfolio
            </Typography>
          </ListItem>

          <ListItem>
            <ListItemIcon sx={{ justifyContent: "center" }}>
              <Link href="/">
                <Home sx={{ color: "white" }} />
              </Link>
            </ListItemIcon>
            <ListItemText>
              <Link href="/" underline="none" color="white">
                Home
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon sx={{ justifyContent: "center" }}>
              <Link href="/about">
                <Person sx={{ color: "white" }} />
              </Link>
            </ListItemIcon>
            <ListItemText>
              <Link href="/about" underline="none" color="white">
                About
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon sx={{ justifyContent: "center" }}>
              <Link href="/work">
                <Work sx={{ color: "white" }} />
              </Link>
            </ListItemIcon>
            <ListItemText>
              <Link href="/work" underline="none" color="white">
                Work
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon sx={{ justifyContent: "center" }}>
              <Link href="/contact">
                <Drafts sx={{ color: "white" }} />
              </Link>
            </ListItemIcon>
            <ListItemText>
              <Link href="/contact" underline="none" color="white">
                Contact
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon sx={{ justifyContent: "center" }}>
              <Link href={Resume} download>
                <InsertDriveFile sx={{ color: "white" }} />
              </Link>
            </ListItemIcon>
            <ListItemText>
              <Link href={Resume} download underline="none" color="white">
                Resume
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
