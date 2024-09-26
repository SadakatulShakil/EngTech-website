import React from "react";
import video from "../../assets/rbrealestae.mp4"
import "./About.css"
const About = () => {
  return (
    <section id="ts-features" class="ts-features">
      <div class="container">
        <div class="row">
          <div class="col-lg-6" 
          data-aos="new-animation"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    // data-aos-anchor-placement="top-center"
    >
            <div class="ts-intro">
              {/* <h2 class="into-title">About Us</h2> */}
              <h3 class="into-sub-title">We deliver unique  projects</h3>
              <p>
                The Award-Winning Real Estate Agency that stands as a beacon of
                excellence among Dubai’s real estate companies. Our
                comprehensive portfolio features a diverse range of properties
                for sale and rent, crafted to meet your unique requirements. .
              </p>
            </div>

            <div class="gap-20"></div>

            <div class="row">
         <div className=" ">
         {/* <iframe src={video} title="Vimeo video" allowfullscreen></iframe> */}
         <div class="embed-responsive embed-responsive-16by9">
  {/* <iframe class="embed-responsive-item" src={video} allowfullscreen  controls muted loop autoplay ></iframe> */}
  <video src={video}   controls muted loop autoplay  >

                </video>
</div>
         </div>
            
          
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0"
           data-aos="fade-up"
           data-aos-offset="200"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false"
          >
            <h3 class="into-sub-title">Our Values</h3>
            <p>
              Our dedicated team comprises seasoned professionals, each with a
              wealth of experience spanning over fifteen years in the
              ever-evolving Dubai real estate landscape.
            </p>

            <div class="accordion accordion-group" id="our-values-accordion">
              <div class="card">
                <div class="card-header p-0 bg-transparent" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                        dedicated community
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#our-values-accordion"
                >
                  <div class="card-body">
                    Explore Dubai’s Latest Off-Plan Properties. An “off-plan”
                    property is a promising real estate investment in Dubai, yet
                    to be completed. We offer a wide selection across different
                    locations and property types. Our dedicated community
                    experts are here to guide you, ensuring you make a
                    well-informed choice. Dive into the world of off-plan
                    properties and ready to move property with us.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header p-0 bg-transparent" id="headingTwo">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      leading property
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#our-values-accordion"
                >
                  <div class="card-body">
                    A selection of properties from the UAE's leading property
                    developers who provide excellent conditions for buying
                    property in the best areas of Dubai. Our experts will help
                    you find the perfect property to invest in!
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header p-0 bg-transparent" id="headingThree">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Integrity
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#our-values-accordion"
                >
                  <div class="card-body">
                    Join us to explore your dream property and unlock the
                    exceptional service that defines Royal Bengal Real Estate
                    LLC. Featured Properties every where in Dubai for Sale and
                    Rent.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
