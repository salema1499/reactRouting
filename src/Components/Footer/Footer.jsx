import React from "react";
import './Footer.css'
export default function Footer() {
  return (
    <>
      <div className="footer pt-5 text-center text-white">
        <div className="container p-4">
          

         

          
          <section className="">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                    <h3>LOCATION</h3>
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      <p>2215 John Daniel Drive</p>
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                     <p>Clark, MO 65243</p>
                    </a>
                  </li>
                  
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                    <h3>AROUND THE WEB</h3>
          
                    </a>
                  </li>
                  <li>
                  <section className="mb-4">
                  <a
                    className="btn btn-outline-light btn-floating m-1 rounded-circle"
                    href="#!"
                   
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
      
                  <a
                    className="btn btn-outline-light btn-floating m-1 rounded-circle"
                    href="#!"
                   
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
      
                  <a
                    className="btn btn-outline-light btn-floating m-1 rounded-circle"
                    href="#!"
                   
                  >
                    <i className="fab fa-google"></i>
                  </a>
      
                  <a
                    className="btn btn-outline-light btn-floating m-1 rounded-circle"
                    href="#!"
                   
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
      
                  <a
                    className="btn btn-outline-light btn-floating m-1 rounded-circle"
                    href="#!"
                   
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
      
                  <a
                    className="btn btn-outline-light btn-floating m-1 rounded-circle"
                    href="#!"
                   
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </section>
                  </li>
                 
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      <h3>ABOUT FREELANCER</h3>
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                     <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </a>
                  </li>
                  
                  
                </ul>
              </div>

             
            </div>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{'background-color':" rgb(26,36,46)"}}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </div>
    </>
  );
}
