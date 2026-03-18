import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { ProjectTheme } from "./Components/ProjectTheme.jsx";
import ChatForumPage from "./Components/ChatForumPage.jsx";
import Sidebar from "./Components/Sidebar.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <ThemeProvider theme={ProjectTheme}>
        <div style={{ display: "flex", height: "100vh" }}>
          {/* Sidebar */}
          <Sidebar />
          {/*chat forum */}
          <div style={{ flex: 1, padding: "1rem" }}>
            <ChatForumPage searchTerm={searchTerm}></ChatForumPage>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
