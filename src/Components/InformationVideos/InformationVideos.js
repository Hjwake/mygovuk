import React, { useState } from "react";
import InformationVideo from '../InformationVideo/InformationVideo';
import "./InformationVideos.css";

function InformationVideos(props) {
        let age = props.age;
		return (
			<div className="information-videos-wrapper">
                <div className="information-video-container information-video-container-left">
                    <InformationVideo video_url="https://www.youtube-nocookie.com/embed/3ux3t50jZkM" />
                </div>
                <div className="information-video-container information-video-container-right">
                    <InformationVideo video_url="https://www.youtube-nocookie.com/embed/kf6tUxRZHho" />
                </div>
			</div>
		);
	};

export default InformationVideos;