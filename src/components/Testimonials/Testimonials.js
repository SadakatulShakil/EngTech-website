import React from "react";
import video from "../../assets/rbrealestae1.mp4";
// import video1 from "../../assets/RBRE.mp4";
const Testimonials = () => {
  return (
    <section class="content  " style={{ background: "#252525" }}>
      <div class="container">
        <div class="row text-center">
          <div class="col-12">
            <h2 class="section-title" style={{ color: "white" }}>
              Work of Excellence
            </h2>
            <h3 class="section-sub-title" style={{ color: "white" }}>
              Recent Projects
            </h3>
          </div>
        </div>
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-lg-6">
            <h3 class="column-title" style={{ color: "white" }}>
              New Launch JLT
            </h3>

            <div class="row">
              <div className=" ">
                {/* <iframe src={video} title="Vimeo video" allowfullscreen></iframe> */}
                <div class="embed-responsive embed-responsive-16by9 border border-1">
                  {/* <iframe class="embed-responsive-item" src={video} allowfullscreen  controls muted loop autoplay ></iframe> */}
                  <video src={video} controls muted loop autoplay></video>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-5 mt-lg-0">
            {/* <h3 class="column-title">Happy Clients</h3> */}
            <h3 class="column-title">
              <a href="#" style={{ color: "white" }}>
                The North Tower of Mercer House will feature an impressive 41
                residential floors offering a total of *325 signature apartments
                ranging from studios to contemporary 1, 2, 3, and 4-bedroom
                penthouses.
              </a>
            </h3>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Testimonials;
