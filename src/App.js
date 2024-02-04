import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Import pages
import Home from "./Pages/Home.js";
import GetStarted from "./Pages/GetStarted.js";
import Platform from "./Pages/Platform.js";

// Import components
import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/get-started" element={<GetStarted/>} />
          <Route path="/platform" element={<Platform/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
