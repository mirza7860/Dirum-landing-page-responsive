import React from "react";
import "./ArtWorklists.css";
import Singleworklist from "../Singleworklist/Singleworklist";
import { artWorklist } from "../../data/data";

const ArtWorklists = () => {
  return (
    <div className="artworklists-container">
      {artWorklist.map((single) => {
        console.log(single);
        return <Singleworklist key={single.id} single={single} />;
      })}
    </div>
  );
};

export default ArtWorklists;
