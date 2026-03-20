import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuContent from "../Components/MenuContent";
import CardGrid from "./CardGrid";
import cards from "../data/CardData";

export default function SideBar() {
  //selected Card
  const [selectedCardIndex, setSelectedCardIndex] = React.useState(null);

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
          <Typography variant="h6">Visitor</Typography>
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
        <Button variant="outlined" fullWidth startIcon={<LogoutRoundedIcon />}>
          Logout
        </Button>
      </Stack>
    </Box>
  );
}
