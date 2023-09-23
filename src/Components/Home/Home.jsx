import React from "react";
import "./Home.css";
import img1 from "../../assets/avataaars.svg";
export default function Home() {
  return (
    <>
      <div className="container-fliud home  text-white">
        <div className="info">
          <img src={img1} alt="" className="img" />
          <h2>START FRAMEWORK</h2>
          </div>
        <div className="d-flex info2">
          <span className=" bg-white">
            
          </span>
          <i className="fas fa-star text-white"></i>
          <span className=" bg-white">
            
          </span>

          
        </div>
        <p className="text-center py-5">Graphic Artist - Web Designer - Illustrator</p>
      
      </div>
    </>
  );
}
