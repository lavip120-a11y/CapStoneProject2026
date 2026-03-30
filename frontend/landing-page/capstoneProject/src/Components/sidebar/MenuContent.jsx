import { useNavigate } from "react-router-dom";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import InstructionsModal from "../../pages/InstructionsModal";

export default function MenuContent() {
  const [openInstructions, setOpenInstructions] = useState(false);
  const navigate = useNavigate();

  const mainListItems = [
    { text: "Home", icon: <HomeRoundedIcon />, path: "/" },
  ];

  const secondaryListItems = [
    { text: "Instructions", icon: <InfoRoundedIcon /> },
  ];

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              selected={index === 0}
              // navigate home
              onClick={() => {
                if (item.text === "Home") navigate("/");
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                if (item.text === "Instructions") setOpenInstructions(true);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* Instructions Modal */}
      <InstructionsModal
        open={openInstructions}
        onClose={() => setOpenInstructions(false)}
      />
    </Stack>
  );
}
