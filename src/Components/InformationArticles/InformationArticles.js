import React, { useState } from "react";
import InformationArticle from '../InformationArticle/InformationArticle';
import "./InformationArticles.css";

function InformationArticles(props) {
        let age = props.age;
		return (
			<div className="information-articles-wrapper">
                <div className="information-article-container">
                    <InformationArticle article_url="https://www.gov.uk/learn-to-drive-a-car" title="Learn to drive a car" description="A step-by-step guide that outlines the steps of learning to drive a car" />
                </div>
                <div className="information-article-container">
                    <InformationArticle article_url="https://www.gov.uk/how-to-vote" title="How to vote" description="A simple guide to get you ready to vote in UK elections." />
                </div>
			</div>
		);
	};

export default InformationArticles;