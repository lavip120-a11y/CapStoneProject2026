import { useState } from "react"; //importing usestate from react as a temporary placeholder for searchterm
import { ThemeProvider } from "@mui/material/styles"; // wrapping my app so that ProjectTheme can be applied
import Box from "@mui/material/Box"; //flexible container
//import "./App.css";
import { ProjectTheme } from "./Components/ProjectTheme.jsx"; //custom theme
import ChatForum from "./Components/ChatForum.jsx"; //Main Landing page
import Sidebar from "./Components/Sidebar.jsx"; //sidebar for landing page
import { useMediaQuery } from "@mui/material";

function App() {
  //const [searchTerm, setSearchTerm] = useState(""); // setting up state for use in search bar maybe
  const [sidebarOpen, setSidebarOpen] = useState(false); //open sidebar drawer on mobile phone
  const isDesktop = useMediaQuery("(min-width:960px)"); //detect screen size
  const toggleDrawer = (open) => () => {
    setSidebarOpen(open);
  };

  return (
    <>
      {/* wrapping app in project theme */}
      <ThemeProvider theme={ProjectTheme}>
        {/* main container for the landing/main/home page - flex for side by side view */}
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            height: "100vh",
            bgcolor: "background.default",
          }}
        >
          {/* Sidebar */}
          {isDesktop ? (
            <Sidebar open={true} toggleDrawer={() => {}} />
          ) : (
            <Sidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />
          )}

          {/*chat forum */}
          {/* container for chatForumPage - main content - flex takes up space beside the sidebar and padding to space items */}
          <Box sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
            {/* passing searchTerm as a prop inside the Chat page */}
            <ChatForum
            // searchTerm={searchTerm}
            ></ChatForum>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
// exporting app for use in main.jsx
export default App;
