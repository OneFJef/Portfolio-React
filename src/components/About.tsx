import {
  Box,
  Card,
  CardMedia,
  List,
  ListItem,
  Typography,
} from "@mui/material";

const Portrait = require("../assets/contemplative-reptile.jpg");

const Story = `I have over 15 years over professional experience in IT (and even
    longer as an enthusiast). My love for computers started with my
    first computer build in 2001, and grew into a life-long career.
    After years of dabbling in computer as a hobbyist throughout high
    school, I enlisted into the United States Air Force as a Cyber
    Systems Operations Specialist, which launched my career into IT. I
    decided to make the transition from networking and infrastructure
    to full-stack engineering as a way to pursue a more creative
    avenue in IT. I adore my cats (my friends have endearingly
    nicknamed me the "Crazy Cat Lady"), and am adventurous and
    passionate about being outdoors.`;

export default function About() {
  return (
    <div>
      {/* Mobile View */}
      <Box
        sx={{
          display: { xs: "flex", md: "flex", lg: "none" },
          height: "100vh",
          position: "relative",
          mx: 1,
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <List>
          <ListItem sx={{ justifyContent: "center" }}>
            <Card sx={{ minWidth: 300, maxWidth: 700, mt: 24, mb: 4 }}>
              <CardMedia component="img" alt="green iguana" image={Portrait} />
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
                minWidth: 300,
                maxWidth: 650,
                color: "#8b8b8b",
                fontStyle: "italic",
              }}
            >
              {Story}
            </Typography>
          </ListItem>
        </List>
      </Box>

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
        <List>
          <ListItem sx={{ justifyContent: "center" }}>
            <Card sx={{ minWidth: 300, maxWidth: 700, mt: 16, mb: 4 }}>
              <CardMedia component="img" alt="green iguana" image={Portrait} />
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
                minWidth: 300,
                maxWidth: 650,
                color: "#8b8b8b",
                fontStyle: "italic",
              }}
            >
              {Story}
            </Typography>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
