import React from "react";

import "./Navbar.css";
import logo from "../../Images/myGOVUK_Logo-White_NS.svg"

function Navbar() {
		return (
			<div className="nav-wrapper">
                <a href="/"><img src={logo} class="navbar-logo" alt="myGOV.UK logo"/></a>
			</div>
		);
	};

export default Navbar;