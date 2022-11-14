import React from "react";
import "./section13.css";
import img2 from "../../Images/s13-2.png";
import img1 from "../../Images/s13-1.png";

const Section13 = () => {
  return (
    <>
      <div className="section13-Container">
        <img className="s13-mainImg" src={img1} alt="" srcset="" />
        <div className="s13-grid">
          <div className="s13-col1">
            <p className="s13-text1">
              ULTIMATE <br />
              COURSE IN
            </p>
            <p className="s13-text2">PHOTOGRAPHY</p>
          </div>
          <div className="s13-col1-res">
            <p className="s13-text1-res">
              ULTIMATE <br />
              COURSE IN
            </p>
            <p className="s13-text2-res">PHOTOGRAPHY</p>
          </div>
          <div className="s13-col2">
            <img className="s13-img" src={img2} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section13;
