import Box from "mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuContent from "../MenuContent";
import CardAlert from "../HomePageCardAlert";

function SideBar() {
  return (
    <Box
      sx={{ width: 250, backgroundColor: "grey.200", p: 2, height: "100vh" }}
    >
      <Stack spacing={2} sx={{ height: "100%" }}>
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

        <CardAlert />

        {/* Logout Button */}
        <Button variant="outlined" fullWidth startIcon={<LogoutRoundedIcon />}>
          Logout
        </Button>
      </Stack>
    </Box>
  );
}

export default SideBar;
