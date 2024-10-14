import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/chatpage";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
