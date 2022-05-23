import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <meta name="viewport" content="width-device-width, initial-scale=1 maximum-scale=1" ></meta>
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/nuraybayrakdar">
                <i className="fa fa-github"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/nuray-bayrakdar/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/nnurayb/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Nuray</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "EAT SLEEP CODE REPEAT",
                    1000,
                    "EAT SLEEP CODE REPEAT",
                    1000,
                    "EAT SLEEP CODE REPEAT",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Building applications with frontend and backend operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire me{" "}
            </button>
            <a href="#" dowland="cv">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
      <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
    </div>
  );
}
