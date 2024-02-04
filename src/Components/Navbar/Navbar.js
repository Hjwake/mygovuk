import React, { useState } from "react";

import "./Navbar.css";
import logo from "../../Images/myGOVUK_Logo-White_NS.svg"

function Navbar(props) {
		return (
			<div className="nav-wrapper">
                <img src={logo} class="navbar-logo" alt="myGOV.UK logo"/>
			</div>
		);
	};

export default Navbar;