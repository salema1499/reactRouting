import React, { useEffect, useState } from "react";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import img4 from "../../assets/poert1.png";
import img5 from "../../assets/port2.png";
import img6 from "../../assets/port3.png";
import "./Portfolio.css";
export default function Portfolio() {
  let infoo = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
  ];
  let [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo({ info: infoo });
  }, []);

  return (
    <div className="portfolio pt-5 container text-center">
      <h2>PORTFOLIO COMPONENT</h2>
      <div className="d-flex  info2 text-center">
        <span className=""></span>
        <i className="fas fa-star "></i>
        <span className=""></span>
      </div>
      <div className="row gy-4">
        {infoo.map((inf, i) => {
          <h1>{inf}</h1>;
          return (
            <div className="col-lg-4 col-md-6" key={i}>
              <img src={inf.img} className="img-fluid" alt="" />
              <div className="layout text-info">
                 <div className="text-white fs-1 plus">+</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
