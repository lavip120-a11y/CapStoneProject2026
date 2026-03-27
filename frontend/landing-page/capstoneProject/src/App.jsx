import { useState } from "react"; //importing usestate from react as a temporary placeholder for searchterm
import { ThemeProvider } from "@mui/material/styles"; // wrapping my app so that ProjectTheme can be applied
import Box from "@mui/material/Box"; //flexible container
import { ProjectTheme } from "./Components/ProjectTheme.jsx"; //custom theme
import ChatForum from "../src/Components/chat/ChatForum.jsx"; //Main Landing page
import Sidebar from "../src/Components/sidebar/Sidebar.jsx"; //sidebar for landing page
import { useMediaQuery } from "@mui/material";
import SignIn from "./pages/login/sign-in/sign-in.jsx";
import SignUp from "./pages/login/sign-up/signUp.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false); //open sidebar drawer on mobile phone
  const [user, setUser] = useState(null); // not logged in
  const [searchTerm, setSearchTerm] = useState(""); // setting up state for use in search bar maybe
  const isDesktop = useMediaQuery("(min-width:960px)"); //detect screen size

  const toggleDrawer = (open) => () => {
    setSidebarOpen(open);
  };
  {
    /* wrapping app in project theme */
  }
  return (
    <ThemeProvider theme={ProjectTheme}>
      {/* main container for the landing/main/home page - flex for side by side view */}
      <Router>
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

          {/* container for chatForumPage - main content - flex takes up space beside the sidebar and padding to space items */}
          <Box sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
            <Routes>
              {/* login page */}
              <Route path="/login" element={<SignIn setUser={setUser} />} />

              {/* signup page */}
              <Route path="/signup" element={<SignUp setUser={setUser} />} />

              {/* chatforum - protected */}
              <Route
                path="/chatforum"
                element={
                  <ProtectedRoute user={user}>
                    <ChatForum searchTerm={searchTerm} />
                  </ProtectedRoute>
                }
              />
              {/* Default Route */}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

// exporting app for use in main.jsx
export default App;
