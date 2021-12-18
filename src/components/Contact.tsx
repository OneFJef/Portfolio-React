import { useState } from "react";
import { Box, Button, List, ListItem, styled, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const WhiteTextField = styled(TextField)({
  "& label": {
    color: "#8b8b8b", // Non-Selected Text
  },
  "&:hover label": {
    color: "#ffffff", // Hover Text
  },
  "& label.Mui-focused": {
    color: "#ffffff", // Selected Text
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#8b8b8b", // Non-Selected Border
    },
    "&:hover fieldset": {
      borderColor: "#ffffff", // Hover Border
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffffff", // Selected Border
    },
  },
  "& input": {
    color: "#ffffff",
  },
});

const WhiteButton = styled(Button)({
  color: "#8b8b8b",
  borderColor: "#8b8b8b",
  "&:hover": {
    color: "#ffffff",
    borderColor: "#ffffff",
  },
});

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      {/* Mobile View */}
      <Box
        sx={{
          display: { xs: "flex", md: "flex", lg: "none" },
          height: "100vh",
          mt: 10,
          justifyContent: "center",
          color: "white",
        }}
      >
        <List sx={{ width: "90%", maxWidth: 500 }}>
          <ListItem>
            <WhiteTextField fullWidth label="Name" variant="outlined" />
          </ListItem>
          <ListItem>
            <WhiteTextField fullWidth label="Email" variant="outlined" />
          </ListItem>
          <ListItem>
            <WhiteTextField
              fullWidth
              multiline
              rows={12}
              label="Message"
              variant="outlined"
            />
          </ListItem>
          <ListItem sx={{ justifyContent: "end" }}>
            <WhiteButton variant="outlined" startIcon={<SendIcon />}>
              Send
            </WhiteButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
