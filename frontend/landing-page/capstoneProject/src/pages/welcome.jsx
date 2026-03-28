import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardGrid from "../Components/sidebar/CardGrid.jsx";
import cards from "../data/CardData.jsx";

export default function Welcome() {
  const navigate = useNavigate();
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
        textAlign: "center",
        overflowY: "auto",
      }}
    >
      <Box
        component="img"
        src="/images/Tairawhiti.jpg"
        alt="Tairawhiti"
        sx={{
          width: "100%",
          maxWidth: 600,
          borderRadius: 2,
          boxShadow: 3,
          mb: 4,
        }}
      />
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
        Welcome to Tairawhiti Rising
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ mb: 4, maxWidth: 600 }}
      >
        Tairawhiti is ....
      </Typography>

      {/* Card Section if wanted
      <Box
        sx={{
          width: "100%",
          maxWidth: 600,
          mb: 4,
        }}
      >
        <CardGrid
          cards={cards}
          selectedCardIndex={selectedCardIndex}
          onSelect={(index) => setSelectedCardIndex(index)}
        />

        {/* Links */}

      {/* {selectedCardIndex !== null && (
          <Box
            sx={{
              mt: 2,
              p: 2,
              backgroundColor: "background.paper",
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              boxShadow: 1,
            }}
          > */}
      {/* <Typography sx={{ mb: 1, fontWeight: "bold" }}>
              {cards[selectedCardIndex].title} Links
            </Typography>
            <ul style={{ paddingLeft: 16, margin: 0 }}>
              {cards[selectedCardIndex].links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Box>
        )}
      </Box> */}

      {/* Login & SignUp Buttons */}

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/login")}
        >
          Log In
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}
