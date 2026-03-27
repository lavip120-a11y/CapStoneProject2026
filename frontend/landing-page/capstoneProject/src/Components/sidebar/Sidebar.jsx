import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Avatar, Button, Divider, Stack, Typography } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuContent from "../sidebar/MenuContent";
import CardGrid from "./CardGrid";
import cards from "../../data/CardData";

export default function SideBar({ user, setUser }) {
  //selected Card
  const [selectedCardIndex, setSelectedCardIndex] = React.useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // clear user
    navigate("/login"); //navigate to login page
  };

  return (
    <Box
      sx={{ width: 250, backgroundColor: "grey.200", p: 2, height: "100vh" }}
    >
      <Stack spacing={2} sx={{ height: "100%" }}>
        {/* Avatar and Username */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar
            alt="Visitor"
            src="/static/images/avatar/7.jpg"
            sx={{ width: 32, height: 32 }}
          />
          <Typography variant="h6">
            {user ? user.userName : "Visitor"}
          </Typography>
        </Stack>
        <Divider />

        {/* Menu Links */}
        <Box sx={{ flexGrow: 1 }}>
          <MenuContent />
        </Box>
        <Divider />

        {/* Cards */}
        <Box sx={{ mt: 2 }}>
          <CardGrid
            cards={cards}
            selectedCardIndex={selectedCardIndex}
            onSelect={(index) => setSelectedCardIndex(index)}
          />

          {/* Links for selected cards */}
          {selectedCardIndex !== null && (
            <Box
              sx={{
                mt: 1,
                p: 1,
                backgroundColor: "grey.100",
                borderRadius: 1,
              }}
            >
              <Box sx={{ mb: 1, fontWeight: "bold" }}>
                {cards[selectedCardIndex].title} Links
              </Box>
              <ul style={{ paddingLeft: 16, margin: 0 }}>
                {cards[selectedCardIndex].links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Box>
          )}
        </Box>

        {/* Logout Button */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<LogoutRoundedIcon />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Stack>
    </Box>
  );
}
