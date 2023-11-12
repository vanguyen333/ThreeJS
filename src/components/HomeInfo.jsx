import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
    </Link>
    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold mx-2 text-white">Van</span>👋
      <br />A Software Engineer from Canada.
    </h1>
  ),
  2: (
    <InfoBox
      text="Fresh Graduate picked up many skills via self learning"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: <h1>3</h1>,
  4: <h1>4</h1>,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
