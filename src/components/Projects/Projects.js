import React from "react";
// import expert1 from "../../../images/expert/expert-1.jpg";
import project1 from "../../assets/project8.jpg";
 
import project5 from "../../assets/project1.jpg";
import project6 from "../../assets/project7.jpg";
import project7 from "../../assets/project9.jpg";
import project8 from "../../assets/project3.jpg";
import project9 from "../../assets/project11.jpg";
import project10 from "../../assets/project12.jpg";
// import project10 from "../../assets/project10.jpg";
import project11 from "../../assets/project13.jpg";
import project12 from "../../assets/project5.jpg";
import project13 from "../../assets/JLT.jpeg";
import project14 from "../../assets/project15.jpg";
import project15 from "../../assets/project16.jpg";
import project16 from "../../assets/project17.jpg";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
     <section id="project-area" class="project-area solid-bg">
     <div class="container">
       <div class="row text-center">
         <div class="col-lg-12">
           <h2 class="section-title" style={{color:"#BC4B26"}}>Work of Excellence</h2>
           <h3 class="section-sub-title" style={{color:"#BC4B26"}}>Our Projects</h3>
         </div>
       </div>
      
   
       <div class="row">
       <div class="col-12">
        
   
   
        <div class="row shuffle-wrapper">
          <div class="col-1 shuffle-sizer"></div>

        

          {/* <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;healthcare&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project2}  aria-label="project-img">
                <img class="img-fluid" src={project2} alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >Ghum Touch Hospital</a>
                  </h3>
                  <p class="project-cat">Healthcare</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project3}  aria-label="project-img">
                <img class="img-fluid" src={project3}  alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project4}  aria-label="project-img">
                <img class="img-fluid" src={project4}  alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div> */}
          <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project5}  aria-label="project-img">
                <img class="img-fluid" src={project5}  alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project6}  aria-label="project-img">
                <img class="img-fluid" src={project6}  alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project7}  aria-label="project-img">
                <img class="img-fluid" src={project7}  alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project8}  aria-label="project-img">
                <img class="img-fluid" src={project8}  alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project9}  aria-label="project-img">
                <img class="img-fluid" src={project9}  alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project1}  aria-label="project-img">
                <img class="img-fluid" src={project1}  alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project11}  aria-label="project-img">
                <img class="img-fluid" src={project11}  alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project10}  aria-label="project-img">
                <img class="img-fluid" src={project10}  alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project12}  aria-label="project-img">
                <img class="img-fluid" src={project12}  alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project13}  aria-label="project-img">
                <img class="img-fluid" src={project13}  alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project14}  aria-label="project-img">
                <img class="img-fluid" src={project14}  alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project15}  aria-label="project-img">
                <img class="img-fluid" src={project15}  alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project16}  aria-label="project-img">
                <img class="img-fluid" src={project16}  alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a  >TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="col-lg-4 col-md-6 p-2 shuffle-item" data-groups="[&quot;government&quot;,&quot;healthcare&quot;]">
            <div class="project-img-container">
              <a class="gallery-popup" href={project10} aria-label="project-img">
                <img class="img-fluid" src={project10} alt="project-img"/>
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a >Capital Teltway Building</a>
                  </h3>
                  <p class="project-cat">Commercial, Interiors</p>
                </div>
              </div>
            </div>
          </div> */}

         
          

         
        </div>
      </div>
   
         <div class="col-12">
           <div class="general-btn text-center">
             {/* <a class="btn btn-primary" href="/projects" style={{background:"#BC4B26"}}>View All Projects</a> */}
             <Link  to="/projects" class=" btn btn-primary "style={{backgroundColor:"#BC4B26"}}>
             View All Projects
                  </Link>
           </div>
         </div>
   
       </div> 
     </div>
   
   </section> 
  );
};

export default Projects;
