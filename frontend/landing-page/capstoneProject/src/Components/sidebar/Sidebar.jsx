import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Avatar,
  Button,
  Divider,
  Stack,
  Typography,
  Drawer,
} from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuContent from "../sidebar/MenuContent";
import ColorModeSelect from "../../pages/login/sharedtheme/colorModeSelect";
import CardGrid from "./CardGrid";
import cards from "../../data/CardData";

export default function SideBar({ user, setUser, open, toggleDrawer }) {
  //selected Card
  const [selectedCardIndex, setSelectedCardIndex] = React.useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // clear user
    navigate("/login"); //navigate to login page
  };

  const drawerContent = (
    <Box sx={{ width: 250, p: 2, height: "100%", overflowX: "hidden" }}>
      <Stack spacing={3} sx={{ height: "100%" }}>
        {/* Avatar and Username */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
          sx={{ p: 1, borderRadius: 2 }}
        >
          <Avatar
            sx={{
              width: 36,
              height: 36,
              bgcolor: "primary.main",
              fontweight: "bold",
            }}
          >
            {user?.userName?.[0]?.toUpperCase() || "V"}
          </Avatar>
          <Typography variant="subtitle1" fontWeight="bold">
            {user?.userName || "Visitor"}
          </Typography>
        </Stack>
        <Divider />

        {/* Menu Links */}
        <Box sx={{ flexGrow: 1 }}>
          <MenuContent />
        </Box>
        <Divider />

        {/* Theme toggle */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ColorModeSelect />
        </Box>

        {/* Logout Button */}
        <Button
          variant="contained"
          fullWidth
          startIcon={<LogoutRoundedIcon />}
          onClick={handleLogout}
          sx={{
            bgcolor: "primary.main",
            color: "white",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#0f5397",
            },
            borderRadius: 1,
          }}
        >
          Logout
        </Button>

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
                backgroundColor: "background.default",
                border: "1px solid #e0e0e0",
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
      </Stack>
    </Box>
  );
  return open !== undefined ? (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      {drawerContent}
    </Drawer>
  ) : (
    <Box
      sx={{
        width: 250,
        backgroundColor: "background.paper",
        borderRight: "1px solid #e0e0e0",
        height: "100vh",
        position: "fixed",
      }}
    >
      {drawerContent}
    </Box>
  );
}
