import React from "react";
import "./Specialists.css";
// import landing from "../../assets/landlord.png";
const Specialists = () => {
  return (
    <section id="ts-service-area" class="ts-service-area pb-0">
      <div class="container">
        <div class="row text-center">
          <div class="col-12">
            <h2 class="section-title" style={{ color: "#BC4B26" }}>
              We Are Specialists In
            </h2>
            <h3 class="section-sub-title" style={{ color: "#BC4B26" }}>
              What We Do
            </h3>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img
                  className="  "
                  loading="lazy"
                  src="images/icon-image/service-icon1.png"
                  alt="service-icon"
                />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">
                  <a href="#" style={{ color: "#BC4B26" }}>
                    Landlord Services
                  </a>
                </h3>
                <p className="text-justify  ">
                  We represent our clients and execute all the demanding tenant
                  management and property handover on the landlord's behalf.
                  This is the most consolidated option for landlords to purchase
                  while saving precious time and immediately enjoying the
                  rental's profit, whilst being released from any management
                  stress.
                </p>
              </div>
            </div>

            <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon2.png"
                  alt="service-icon"
                />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">
                  <a href="#" style={{ color: "#BC4B26" }}>
                    Building Remodels
                  </a>
                </h3>
                <p>
                  Building remodels are not just about upgrading physical
                  spaces; they are a testament to our commitment to progress and
                  innovation in the real estate industry.we understand the
                  profound impact that a thoughtfully executed remodel can have
                  on the way we work and serve our clients.
                </p>
              </div>
            </div>

            <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon3.png"
                  alt="service-icon"
                />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">
                  <a href="#" style={{ color: "#BC4B26" }}>
                    Interior Design
                  </a>
                </h3>
                <p>
                  We understand that homes are not just structures; they're
                  reflections of the lives lived within. Our approach to
                  interior design is rooted in understanding the unique
                  lifestyles of our clients. From cosy family spaces to
                  sophisticated urban dwellings, our designs cater to diverse
                  preferences, ensuring that each space is a true representation
                  of its inhabitants.
                </p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-4 text-center"
            // data-aos="zoom-in"
            // data-aos-offset="5000"
            // data-aos-delay="100"
            // data-aos-duration="200"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
          >
            <img
              loading="lazy"
              class="img-fluid"
              src="images/services/service-center.jpg"
              alt="service-avater-image"
            />
          </div>

          <div class="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
            <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon4.png"
                  alt="service-icon"
                />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">
                  <a href="#" style={{ color: "#BC4B26" }}>
                    Exterior Design
                  </a>
                </h3>
                <p>
                  Our commitment to excellence begins at the doorstep. Nestled
                  in the heart of the city, our modern and inviting exterior
                  design sets the stage for a seamless real estate experience.
                  Let the exterior of our office be the first indication of the
                  unparalleled service that awaits within.
                </p>
              </div>
            </div>

            <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon5.png"
                  alt="service-icon"
                />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">
                  <a href="#" style={{ color: "#BC4B26" }}>
                    Renovation
                  </a>
                </h3>
                <p>
                  In the world of real estate, the power of transformation lies
                  not only in finding new spaces but also in breathing new life
                  into existing ones. Renovation, the art of revitalizing
                  properties, holds the potential to elevate a space, increase
                  its value, and create a lasting impact.
                </p>
              </div>
            </div>

            <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon6.png"
                  alt="service-icon"
                />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">
                  <a href="#" style={{ color: "#BC4B26" }}>
                    Safety Management
                  </a>
                </h3>
                <p>
                  Safety begins with a thorough understanding of potential
                  risks. Our safety management approach involves comprehensive
                  property assessments, identifying and addressing potential
                  hazards before they become issues. From structural integrity
                  to fire safety, we leave no stone unturned in our commitment
                  to providing secure environments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialists;
