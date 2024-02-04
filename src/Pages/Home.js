import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
        <div className="home-header">
          <h1>Redefine your relationship with Government.</h1>
          <h4>Welcome to myGOV.UK — your new platform to recieve tailored advice, information, and seamless access to government services.</h4>
          <Link to="/get-started"><button className="btn_white_blue_text">Get started</button></Link>
        </div>
        <div className="home-body">
          <h3>How it works</h3>
          <p>When you register for an account, we'll ask you for certain details about your identity and circumstance. We then use these details transparently to help:</p>
          <ul>
            <li>Suggest informative articles and videos relevant to you</li>
            <li>Give reminders for things you may otherwise forget, such as your passport expiring</li>
            <li>Signpost government services</li>
          </ul>
        </div>
    </div>
  );
}

export default Home;


