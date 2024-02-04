import React, {useState} from "react";
import { useLocation } from 'react-router-dom';
import InformationVideos from '../Components/InformationVideos/InformationVideos';
import InformationArticles from '../Components/InformationArticles/InformationArticles';
import RecommendedService from '../Components/RecommendedService/RecommendedService';
import "./Platform.css";
import userEvent from "@testing-library/user-event";

function Platform() {
  const { state } = useLocation();
  const userInfo = state?.userInfo || {};
  const [showVideoVersion, setShowVideoVersion] = useState(true);

  // If the user is younger than 25, then display videos to them; otherwise, show them articles
  if (userInfo.age > 25){
    setShowVideoVersion(false);
  }

  return (
    <div>
      <div className="platform-header">
        <h1>Welcome to your myGOV.UK, {userInfo.firstName}</h1>
        <a href="#information-and-advice"><button className="btn_white_blue_text">Information & Advice</button></a>
        <a href="#recommended-services"><button className="btn_white_blue_text">Recommended Services</button></a>
        <a href="#data-transparency"><button className="btn_white_blue_text">Data Transparency</button></a>
      </div>

      <div className="platform-body">
      <div className="information-and-advice" id="information-and-advice">
          <h2>Information & Advice</h2>

          {showVideoVersion ?
            <InformationVideos age={userInfo.age} />:
            <InformationArticles age={userInfo.age} />
          }

          {showVideoVersion ?
            <button className="btn_blue" onClick={() => setShowVideoVersion(false)}>Switch to article form</button>:
            <button className="btn_blue" onClick={() => setShowVideoVersion(true)}>Switch to video form</button>
          }
      </div>

      <div className="recommended-services" id="recommended-services">
          <h2>Recommended Services</h2>
          <RecommendedService
            service_name="Apply for a provisional driving licence"
            service_description="Get your first provisional driving licence for a car, motorbike, moped or other vehicle from DVLA online."
            service_url="https://www.gov.uk/apply-first-provisional-driving-licence"
          />
          <RecommendedService
            service_name="Register to vote"
            service_description="This service will enable you to get on the electoral register, so you can vote in elections or referendums."
            service_url="https://www.gov.uk/apply-first-provisional-driving-licence"
          />
      </div>

        <div className="data-transparency" id="data-transparency">
            <h2>Data Transparency</h2>
            <p>Here you can find all of the data that the UK government currently holds about you that is linked to your account.</p>
            <h5>Name</h5>
            <p>{userInfo.firstName} {userInfo.lastName}</p>
            <h5>Email</h5>
            <p>{userInfo.email}</p>
            <h5>Age</h5>
            <p>{userInfo.age}</p>
            <h5>Annual salary</h5>
            <p>£{userInfo.salary}</p>
            <h5>Disability status</h5>
            {userInfo.hasDisability ? (
              <p>You have declared that you have a disability.</p>
            ) : (
              <p>You have not declared any disabilities.</p>
            )}
            </div>
      </div>
    </div>
  );
};

export default Platform;