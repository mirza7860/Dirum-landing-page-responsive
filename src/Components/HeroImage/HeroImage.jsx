import React from "react";
import "./HeroImage.css";
import HeroImg from "../../assets/Heroimage.png";
const HeroImage = () => {
  return (
    <>
      <div className="image">
        <img src={HeroImg} alt="Hero  Image" />
      </div>
    </>
  );
};

export default HeroImage;
