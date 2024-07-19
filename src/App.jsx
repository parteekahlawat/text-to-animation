import Homepage from "./pages/Homepage";
import Space from "./pages/Space";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/workspace" element={<Space />} /> 
      </Routes>
    </Router>
    </>
  )
}

export default App
