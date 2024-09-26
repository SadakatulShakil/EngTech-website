import React from "react";
import Business from "../Business/Business";
import realestate from "../../assets/realestate.jpg";

const AboutHeader = () => {
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
                  <h1 class="banner-title">About</h1>
                  {/* <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                      <li class="breadcrumb-item"><a href="#">Home</a></li>
                      <li class="breadcrumb-item"><a href="#">company</a></li>
                      <li class="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="main-container" class="main-container">
        <div class="container ">
          <div class="row ">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6  align-items-center justify-content-center d-flex  ">
              <div class="p-3  ">
                <img
                  src={realestate}
                  alt=""
                  className="img-fluid rounded-2 border"
                />
              </div>
            </div>

            <div class="col-12 col-sm-12 col-md-6 col-lg-6  ">
              <h3 class="column-title mt-2" style={{ color: "#BC4B26" }}>
                Who We Are
              </h3>
              <p>
                Our commitment to excellence shines through as we guide you
                seamlessly through every facet of your real estate venture. Our
                dedication is to stand by your side as the indispensable ally
                your aspirations require, offering precise counsel and
                safeguarding your future and interests.
              </p>
              <blockquote>
                <h3 style={{ color: "#BC4B26" }}>Our Mission</h3>
                <p>
                  We are committed to integrating cutting-edge methodologies in
                  marketing, administration, leasing, and sales of residential,
                  commercial, and retail properties, as we proactively enhance
                  our portfolio with premier listings in the city and beyond. By
                  continually broadening our offerings, networks, and resources
                  to align with our client's requirements, we strive to provide
                  unparalleled customer service
                </p>
              </blockquote>
              <h3 style={{ color: "#BC4B26" }}>Our Vision</h3>
              <p>

                Our aspiration is to establish ourselves as the foremost,
                proficient, and dependable property management and real estate
                agency in the UAE, setting the standard for reliability and
                professionalism in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Business></Business>

      {/* <section id="ts-team" class="ts-team">
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-12">
              <h2 class="section-title" style={{ color: "#BC4B26" }}>
                Quality Service
              </h2>
              <h3 class="section-sub-title" style={{ color: "#BC4B26" }}>
                Professional Team
              </h3>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div id="team-slide" class="team-slide">
                <div class="item">
                  <div class="ts-team-wrapper">
                    <div class="team-img-wrapper">
                      <img
                        loading="lazy"
                        class="w-100"
                        src="images/team/team1.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div class="ts-team-content">
                      <h3 class="ts-name">Nats Stenman</h3>
                      <p class="ts-designation">Chief Operating Officer</p>
                      <p class="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div class="team-social-icons">
                        <a
                          target="blank"
                          href="https://www.facebook.com/ce.engtech"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a target="blank" href="https://twitter.com/">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          target="blank"
                          href="https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo"
                        >
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ts-team-wrapper">
                    <div class="team-img-wrapper">
                      <img
                        loading="lazy"
                        class="w-100"
                        src="images/team/team2.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div class="ts-team-content">
                      <h3 class="ts-name">Angela Lyouer</h3>
                      <p class="ts-designation">Innovation Officer</p>
                      <p class="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div class="team-social-icons">
                        <a
                          target="blank"
                          href="https://www.facebook.com/ce.engtech"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a target="blank" href="https://twitter.com/">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          target="blank"
                          href="https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo"
                        >
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ts-team-wrapper">
                    <div class="team-img-wrapper">
                      <img
                        loading="lazy"
                        class="w-100"
                        src="images/team/team3.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div class="ts-team-content">
                      <h3 class="ts-name">Mark Conter</h3>
                      <p class="ts-designation">Safety Officer</p>
                      <p class="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div class="team-social-icons">
                        <a
                          target="blank"
                          href="https://www.facebook.com/ce.engtech"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a target="blank" href="https://twitter.com/">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          target="blank"
                          href="https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo"
                        >
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ts-team-wrapper">
                    <div class="team-img-wrapper">
                      <img
                        loading="lazy"
                        class="w-100"
                        src="images/team/team4.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div class="ts-team-content">
                      <h3 class="ts-name">Ayesha Stewart</h3>
                      <p class="ts-designation">Finance Officer</p>
                      <p class="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div class="team-social-icons">
                        <a
                          target="blank"
                          href="https://www.facebook.com/ce.engtech"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a target="blank" href="https://twitter.com/">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          target="blank"
                          href="https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo"
                        >
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ts-team-wrapper">
                    <div class="team-img-wrapper">
                      <img
                        loading="lazy"
                        class="w-100"
                        src="images/team/team5.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div class="ts-team-content">
                      <h3 class="ts-name">Dave Clarkte</h3>
                      <p class="ts-designation">Civil Engineer</p>
                      <p class="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div class="team-social-icons">
                        <a
                          target="blank"
                          href="https://www.facebook.com/ce.engtech"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a target="blank" href="https://twitter.com/">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          target="blank"
                          href="https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo"
                        >
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ts-team-wrapper">
                    <div class="team-img-wrapper">
                      <img
                        loading="lazy"
                        class="w-100"
                        src="images/team/team6.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div class="ts-team-content">
                      <h3 class="ts-name">Elton Joe</h3>
                      <p class="ts-designation">Site Supervisor</p>
                      <p class="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div class="team-social-icons">
                        <a
                          target="blank"
                          href="https://www.facebook.com/ce.engtech"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a target="blank" href="https://twitter.com/">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          target="blank"
                          href="https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo"
                        >
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutHeader;
