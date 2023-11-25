import React from "react";
import "./Features.css"
import { features } from "../../data/data";
const Features = () => {
  return (
    <>
      <div className="feature">
        <div className="child" key={features[0].alt}>
          <img src={features[0].featureImg} alt={features[0].featureTag} />
          <div className="desc">
            <h2>{features[0].featureTag}</h2>
            <p>{features[0].Desc}</p>
          </div>
        </div>
        <div className="child" key={features[1].alt}>
          <img src={features[1].featureImg} alt={features[1].featureTag} />
          <div className="desc">
            <h2>{features[1].featureTag}</h2>
            <p>{features[1].Desc}</p>
          </div>
        </div>
        <div className="child" key={features[2].alt}>
          <img src={features[2].featureImg} alt={features[2].featureTag} />
          <div className="desc">
            <h2>{features[2].featureTag}</h2>
            <p>{features[2].Desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
