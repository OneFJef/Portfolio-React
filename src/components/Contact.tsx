import { useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";

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
    color: "#ffffff", // Name & Email Input Color
  },
  "& textarea": {
    color: "#ffffff", // Message Input Color
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
  const [nameValidation, setNameValidation] = useState(false);

  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);

  const [message, setMessage] = useState("");
  const [messageValidation, setMessageValidation] = useState(false);

  const [sent, setSent] = useState(false);

  const validate = () => {
    if (name && email && message) {
      const serviceId = "default_service";
      const templateId = "template_nmrbq5c";
      const userId = "user_vaRoIN04EO15VzfPlgKLA";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      alert("Thank you for your message, we will be in touch in no time!");
    } else {
      if (name) {
        setNameValidation(false);
      } else {
        setNameValidation(true);
      }
      if (email) {
        setEmailValidation(false);
      } else {
        setEmailValidation(true);
      }
      if (message) {
        setMessageValidation(false);
      } else {
        setMessageValidation(true);
      }
    }
  };

  return (
    <div>
      {/* Mobile View */}
      <Box
        sx={{
          display: { xs: "flex", md: "flex", lg: "none" },
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <List sx={{ mt:4, width: "90%", maxWidth: 500 }}>
          <ListItem>
            <Typography variant="h4" sx={{  fontWeight: "bold" }}>
              Get in Touch
            </Typography>
          </ListItem>
          <ListItem>
            <WhiteTextField
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameValidation}
              helperText={nameValidation && "Please enter a name."}
            />
          </ListItem>
          <ListItem>
            <WhiteTextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailValidation}
              helperText={emailValidation && "Please enter an email."}
            />
          </ListItem>
          <ListItem>
            <WhiteTextField
              fullWidth
              multiline
              rows={12}
              label="Message"
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageValidation}
              helperText={messageValidation && "Please enter a message."}
            />
          </ListItem>
          <ListItem sx={{ justifyContent: "end" }}>
            <WhiteButton
              type="submit"
              variant="outlined"
              startIcon={<SendIcon />}
              onClick={validate}
            >
              Send
            </WhiteButton>
          </ListItem>
        </List>
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
        <List sx={{ width: "90%", maxWidth: 500 }}>
          <ListItem>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Get in Touch
            </Typography>
          </ListItem>
          <ListItem>
            <WhiteTextField
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameValidation}
              helperText={nameValidation && "Please enter a name."}
            />
          </ListItem>
          <ListItem>
            <WhiteTextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailValidation}
              helperText={emailValidation && "Please enter an email."}
            />
          </ListItem>
          <ListItem>
            <WhiteTextField
              fullWidth
              multiline
              rows={12}
              label="Message"
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageValidation}
              helperText={messageValidation && "Please enter a message."}
            />
          </ListItem>
          <ListItem sx={{ justifyContent: "end" }}>
            <WhiteButton
              type="submit"
              variant="outlined"
              startIcon={<SendIcon />}
              onClick={validate}
            >
              Send
            </WhiteButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
