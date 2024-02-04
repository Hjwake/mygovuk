import React, { useState } from "react";

import "./InformationVideo.css";

function InformationVideo(props) {
        let url = props.video_url;
		return (
			<div className="information-video-wrapper">
                <iframe width="560" height="315" src={url} title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
		);
	};

export default InformationVideo;