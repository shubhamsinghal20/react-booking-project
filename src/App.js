import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingSummary from "./components/BookingSummary";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Seats from "./components/Seats";
import Theatre from "./components/Theatre";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theatre" element={<Theatre />} />
          <Route path="/seats" element={<Seats />} />
          <Route path="/bookingSummary" element={<BookingSummary />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
