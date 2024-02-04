import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Import pages
import Home from "./Pages/Home.js"

// Import components
import Navbar from './Components/Navbar/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
