import { useState } from "react"; //importing usestate from react as a temporary placeholder for searchterm
import Box from "@mui/material/Box"; //flexible container
import AppTheme from "./pages/login/sharedtheme/appTheme.jsx"; //// wrapping my app so that AppTheme can be applied
import { CssBaseline, Typography, useMediaQuery } from "@mui/material";
import ChatForum from "../src/Components/chat/ChatForum.jsx"; //Main Landing page
import Sidebar from "../src/Components/sidebar/Sidebar.jsx"; //sidebar for landing page
import SignIn from "./pages/login/sign-in/sign-in.jsx";
import SignUp from "./pages/login/sign-up/signUp.jsx";
import Welcome from "./pages/welcome.jsx";
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
  // const [searchTerm, setSearchTerm] = useState(""); // setting up state for use in search bar maybe
  const isDesktop = useMediaQuery("(min-width:960px)"); //detect screen size

  const toggleDrawer = (open) => () => {
    setSidebarOpen(open);
  };
  {
    /* wrapping app in Apptheme for consistent styling */
  }
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      {/* main container for the landing/main/home page - flex for side by side view */}
      <Router>
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            bgcolor: "background.default",
          }}
        >
          {/* Sidebar - desktop or mobile*/}
          {isDesktop ? (
            <Sidebar user={user} setUser={setUser} />
          ) : (
            <Sidebar
              open={sidebarOpen}
              toggleDrawer={toggleDrawer}
              user={user}
              setUser={setUser}
            />
          )}

          {/* container for chatForumPage - main content - flex takes up space beside the sidebar and padding to space items */}
          <Box
            sx={{
              flexGrow: 1,
              p: { xs: 2, md: 4 },
              ml: { md: "250px" },
              backgroundColor: "background.default",
            }}
          >
            <Routes>
              {/* Welcome Page */}
              <Route
                path="/"
                element={
                  !user ? <Welcome /> : <Navigate to="/chatforum" replace />
                }
              />

              {/* login page */}
              <Route path="/login" element={<SignIn setUser={setUser} />} />

              {/* signup page */}
              <Route path="/signup" element={<SignUp setUser={setUser} />} />

              {/* chatforum - protected */}
              <Route
                path="/chatforum"
                element={
                  <ProtectedRoute user={user}>
                    <Box
                      sx={{
                        maxWidth: 1200,
                        margin: "0 auto",
                        backgroundColor: "background.paper",
                        borderRadius: 3,
                        p: 3,
                        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                      }}
                    >
                      <ChatForum user={user} />
                    </Box>
                  </ProtectedRoute>
                }
              />
              {/* Default Route */}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </AppTheme>
  );
}

// exporting app for use in main.jsx
export default App;
