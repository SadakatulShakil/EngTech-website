import React from "react";
import services1 from "../../assets/lanlordservices.jpg";
import services2 from "../../assets/services2.jpg";
import services3 from "../../assets/services3.jpg";
import services4 from "../../assets/services4.jpg";
import services5 from "../../assets/services5.jpg";
import services6 from "../../assets/services6.jpg";
const Services = () => {
  return (
    <div>
      <div
        id="banner-area"
        class="banner-area"
        style={{ backgroundImage: `url("images/banner/banner1.jpg")` }}
      >
        <div class="banner-text">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">Service</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="main-container" class="main-container pb-2">
        <div class="container">
        <div class="row text-center">
         <div class="col-lg-12">
           <h2 class="section-title" style={{color:"#BC4B26"}}>Work of Excellence</h2>
           <h3 class="section-sub-title" style={{color:"#BC4B26"}}>Our Services</h3>
         </div>
       </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-5">
              <div class="ts-service-box">
                <div class="ts-service-image-wrapper">
                  <img
                    loading="lazy"
                    class="w-100"
                    src={services1}
                    alt="service-image"
                  />
                </div>
                <div class="d-flex">
                  <div class="ts-service-box-img">
                    <img
                      loading="lazy"
                      src="images/icon-image/service-icon1.png"
                      alt="service-icon"
                    />
                  </div>
                  <div class="ts-service-info">
                    <h3 class="service-box-title">
                      <a href="/services">LANDLORD SERVICES</a>
                    </h3>
                    <p>
                      We represent our clients and execute all the demanding
                      tenant management and property handover on the landlord's
                      behalf. This is the most consolidated option for landlords
                      to purchase while saving precious time and immediately
                      enjoying the rental's profit, whilst being released from
                      any management stress.
                    </p>
                    {/* <a
                      class="learn-more d-inline-block"
                      href="/services"
                      aria-label="service-details"
                    >
                      <i class="fa fa-caret-right"></i> Learn more
                    </a> */}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-5">
              <div class="ts-service-box">
                <div class="ts-service-image-wrapper">
                  <img
                    loading="lazy"
                    class="w-100"
                    src={services2}
                    alt="service-image"
                  />
                </div>
                <div class="d-flex">
                  <div class="ts-service-box-img">
                    <img
                      loading="lazy"
                      src="images/icon-image/service-icon2.png"
                      alt="service-icon"
                    />
                  </div>
                  <div class="ts-service-info">
                    <h3 class="service-box-title">
                      <a href="/services">BUILDING REMODELS</a>
                    </h3>
                    <p>
                      Building remodels are not just about upgrading physical
                      spaces; they are a testament to our commitment to progress
                      and innovation in the real estate industry.we understand
                      the profound impact that a thoughtfully executed remodel
                      can have on the way we work and serve our clients.
                    </p>
                    {/* <a
                      class="learn-more d-inline-block"
                      href="/services"
                      aria-label="service-details"
                    >
                      <i class="fa fa-caret-right"></i> Learn more
                    </a> */}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-5">
              <div class="ts-service-box">
                <div class="ts-service-image-wrapper">
                  <img
                    loading="lazy"
                    class="w-100"
                    src={services3}
                    alt="service-image"
                  />
                </div>
                <div class="d-flex">
                  <div class="ts-service-box-img">
                    <img
                      loading="lazy"
                      src="images/icon-image/service-icon3.png"
                      alt="service-icon"
                    />
                  </div>
                  <div class="ts-service-info">
                    <h3 class="service-box-title">
                      <a href="/services">INTERIOR DESIGN</a>
                    </h3>
                    <p>
                      We understand that homes are not just structures; they're
                      reflections of the lives lived within. Our approach to
                      interior design is rooted in understanding the unique
                      lifestyles of our clients. From cosy family spaces to
                      sophisticated urban dwellings, our designs cater to
                      diverse preferences, ensuring that each space is a true
                      representation of its inhabitants.
                    </p>
                    {/* <a
                      class="learn-more d-inline-block"
                      href="/services"
                      aria-label="service-details"
                    >
                      <i class="fa fa-caret-right"></i> Learn more
                    </a> */}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-5">
              <div class="ts-service-box">
                <div class="ts-service-image-wrapper">
                  <img
                    loading="lazy"
                    class="w-100"
                    src={services4}
                    alt="service-image"
                  />
                </div>
                <div class="d-flex">
                  <div class="ts-service-box-img">
                    <img
                      loading="lazy"
                      src="images/icon-image/service-icon4.png"
                      alt="service-icon"
                    />
                  </div>
                  <div class="ts-service-info">
                    <h3 class="service-box-title">
                      <a href="/services">EXTERIOR DESIGN</a>
                    </h3>
                    <p>
                      Our commitment to excellence begins at the doorstep.
                      Nestled in the heart of the city, our modern and inviting
                      exterior design sets the stage for a seamless real estate
                      experience. Let the exterior of our office be the first
                      indication of the unparalleled service that awaits within.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-5">
              <div class="ts-service-box">
                <div class="ts-service-image-wrapper">
                  <img
                    loading="lazy"
                    class="w-100"
                    src={services5}
                    alt="service-image"
                  />
                </div>
                <div class="d-flex">
                  <div class="ts-service-box-img">
                    <img
                      loading="lazy"
                      src="images/icon-image/service-icon5.png"
                      alt="service-icon"
                    />
                  </div>
                  <div class="ts-service-info">
                    <h3 class="service-box-title">
                      <a href="/services">RENOVATION</a>
                    </h3>
                    <p>
                      In the world of real estate, the power of transformation
                      lies not only in finding new spaces but also in breathing
                      new life into existing ones. Renovation, the art of
                      revitalizing properties, holds the potential to elevate a
                      space, increase its value, and create a lasting impact.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-5">
              <div class="ts-service-box">
                <div class="ts-service-image-wrapper">
                  <img
                    loading="lazy"
                    class="w-100"
                    src={services6}
                    alt="service-image"
                  />
                </div>
                <div class="d-flex">
                  <div class="ts-service-box-img">
                    <img
                      loading="lazy"
                      src="images/icon-image/service-icon6.png"
                      alt="service-icon"
                    />
                  </div>
                  <div class="ts-service-info">
                    <h3 class="service-box-title">
                      <a href="/services">SAFETY MANAGEMENT</a>
                    </h3>
                    <p>
                      Safety begins with a thorough understanding of potential
                      risks. Our safety management approach involves
                      comprehensive property assessments, identifying and
                      addressing potential hazards before they become issues.
                      From structural integrity to fire safety, we leave no
                      stone unturned in our commitment to providing secure
                      environments
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
