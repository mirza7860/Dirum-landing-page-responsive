import React from "react";
import "./Singleworklist.css";

const Singleworklist = ({ single }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={single.artImg}
        alt="single-art work list"
      />
      <div className="card-body">
        <p className="card-text">{single.artTypename}</p>
      </div>
    </div>
  );
};

export default Singleworklist;
