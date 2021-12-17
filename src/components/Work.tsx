import "../App.css";
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

const Dude_Theres_My_Car = require("../assets/projects/Dude_Theres_My_Car.png");
const Fitness_Tracker = require("../assets/projects/Fitness_Tracker.png");
const Quiz = require("../assets/projects/Quiz.png");
const Weather_Dashboard = require("../assets/projects/Weather_Dashboard.png");

const itemData = [
  {
    img: `${Dude_Theres_My_Car}`,
    title: "Dude, There's My Car",
    link: "https://github.com/mrtbird539/DTMC",
  },
  {
    img: `${Fitness_Tracker}`,
    title: "Fitness Tracker",
    link: "https://github.com/OneFJef/fitness-tracker",
  },
  {
    img: `${Quiz}`,
    title: "Quiz",
    link: "https://github.com/OneFJef/quiz",
  },
  {
    img: `${Weather_Dashboard}`,
    title: "Weather Dashboard",
    link: "https://github.com/OneFJef/weather-dashboard",
  },
];

export default function Work() {
  return (
    <div>
      {/* Mobile View */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none", md: "none" },
          height: "100vh",
          justifyContent: "center",
          color: "white",
        }}
      >
        <ImageList
          sx={{
            mt: 9,
            mx: 2,
            maxWidth: 375,
          }}
          cols={1}
          gap={16}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
                onClick={() => window.open(item.link)}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{ bgcolor: "#000000" }}
                title={item.title}
                onClick={() => window.open(item.link)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      {/* Tablet View */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex", md: "flex", lg: "none" },
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <ImageList
          sx={{ mt: 10, mx: 2, maxHeight: "75%", maxWidth: 775 }}
          gap={24}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?h=315&fit=crop&auto=format`}
                alt={item.title}
                onClick={() => window.open(item.link)}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{ bgcolor: "#000000" }}
                title={item.title}
                onClick={() => window.open(item.link)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

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
        <ImageList
          sx={{ mt: 2, mx: 2, maxHeight: "75%", maxWidth: 775 }}
          gap={24}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?h=315&fit=crop&auto=format`}
                alt={item.title}
                onClick={() => window.open(item.link)}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{ bgcolor: "#000000" }}
                title={item.title}
                onClick={() => window.open(item.link)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}
