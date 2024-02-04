import React, { useState } from "react";

import "./RecommendedService.css";

function RecommendedService(props) {
        let url = props.service_url;
        let service_name = props.service_name;
        let service_description = props.service_description;
		return (
			<div className="recommended-service-wrapper">
                <a href={url}><h4 className="link-underlined">{service_name}</h4></a>
                <p>{service_description}</p>
			</div>
		);
	};

export default RecommendedService;