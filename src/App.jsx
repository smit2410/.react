import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Your Amazon home page
import Login from "./pages/login"; // Login Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Amazon Clone Home Page */}
        <Route path="/login" element={<Login />} />  {/* Separate Login Page */}
      </Routes>
    </Router>
  );
}

export default App;
