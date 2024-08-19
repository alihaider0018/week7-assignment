import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Assignment1 from "./components/Assignment1";
import Assignment2 from "./components/Assignment2";
import Assignment3 from "./components/Assignment3";
import Assignment4 from "./components/Assignment4";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/assignment1" element={<Assignment1 />} />
          <Route path="/assignment2" element={<Assignment2 />} />
          <Route path="/assignment3" element={<Assignment3 />} />
          <Route path="/assignment4" element={<Assignment4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
