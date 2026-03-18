import Typography from "@mui/material/Typography";
import ForumPage from "./ForumPage";
import Box from "@mui/material/Box";

function ChatForum() {
  return (
    <>
      {/* matching the mui theme and sidebar */}
      <Box sx={{ p: 3, bgcolor: "background.default", minHeight: "100%" }}>
        {/* Heading */}
        <Typography variant="h4" gutterBottom>
          Welcome
        </Typography>
        {/* Adding forum  */}
        <ForumPage></ForumPage>
      </Box>
    </>
  );
}

export default ChatForum;
