import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-body">
        <div className="home-header">
        <h1>Redefine your relationship with government.</h1>
        <h4>Welcome to myGOV.UK — your new platform to recieve tailored advice and information, with seamless access to government services.</h4>
        <Link to="/get-started"><button className="btn_white_blue_text">Get started</button></Link>
        </div>
    </div>
  );
}

export default Home;


