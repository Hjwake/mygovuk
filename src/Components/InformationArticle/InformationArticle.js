import React, { useState } from "react";

import "./InformationArticle.css";

function InformationArticle(props) {
        let url = props.article_url;
		let title = props.title;
		let description = props.description;
		return (
			<div className="information-article-wrapper">
					<h4>{props.title}</h4>
					<p>{props.description}</p>
					<a className="link-underlined" href={url}>Read article</a>
			</div>
		);
	};

export default InformationArticle;