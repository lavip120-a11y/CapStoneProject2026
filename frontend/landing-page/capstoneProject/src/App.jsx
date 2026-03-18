import { useState } from "react"; //importing usestate from react as a temporary placeholder for searchterm
import { ThemeProvider } from "@mui/material/styles"; // wrapping my app so that ProjectTheme can be applied
import Box from "@mui/material/Box"; //flexible container
import "./App.css";
import { ProjectTheme } from "./Components/ProjectTheme.jsx"; //custom theme
import ChatForumPage from "./Components/ChatForumPage.jsx"; //Main Landing page
import Sidebar from "./Components/Sidebar.jsx"; //sidebar for landing page

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // setting up state for use in search bar maybe

  return (
    <>
      {/* wrapping app in project theme */}
      <ThemeProvider theme={ProjectTheme}>
        {/* main container for the landing/main/home page - flex for side by side view */}
        <Box sx={{ display: "flex", height: "100vh" }}>
          {/* Sidebar */}
          <Sidebar />
          {/*chat forum */}
          {/* container for chatForumPage - main content - flex takes up space beside the sidebar and padding to space items */}
          <Box
            component="main"
            sx={{ flex: 1, p: 2, bgcolor: "Background.default" }}
          >
            {/* passing searchTerm as a prop inside the Chat page */}
            <ChatForumPage searchTerm={searchTerm}></ChatForumPage>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
// exporting app for use in main.jsx
export default App;
