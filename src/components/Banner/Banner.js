import React from "react";
import banner1 from "../../assets/banner1.jpg"
import Popup from "../Popup/Popup";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
     <div class="banner-carousel banner-carousel-1 mb-0">
   
      <div
        class="banner-carousel-item"
        style=
        // {{ backgroundImage: `url("images/slider-main/banner1.jpg")` }}
        // {{background: `linear-gradient(000deg, #262F3B 0%, rgba(10, 0, 10, 0)80%), url(${banner1})`}}
        {{ backgroundImage: `url("images/slider-main/banner1.jpg")` }}
      >
        <div class="slider-content">
          <div class="container h-100">
            <div class="row align-items-center h-100">
              <div class="col-md-12 text-center">
                <h2 class="slide-title" data-animation-in="slideInLeft">
                  10 Years of excellence in
                </h2>
                <h3 class="slide-sub-title" data-animation-in="slideInRight">
                Welcome to ENGTECH DESIGN AND DEVELOPMENT in BANGLADESH
                </h3>
                <p data-animation-in="slideInLeft" data-duration-in="1.2">
                   
                  <Link  to="/services" class="slider btn btn-primary "style={{backgroundColor:"#BC4B26"}}>
                    Our Services
                  </Link>
                   
                  <Link  to="/contact" class="slider btn btn-primary "style={{backgroundColor:"#BC4B26"}}>
                  Contact Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="banner-carousel-item"
        style={{ backgroundImage: `url("images/slider-main/banner3.jpg")` }}
      >
        <div class="slider-content text-left">
          <div class="container h-100">
            <div class="row align-items-center h-100">
              <div class="col-md-12">
                <h2 class="slide-title-box" data-animation-in="slideInDown">
                  World Class Service
                </h2>
                <h3 class="slide-title" data-animation-in="fadeIn">
                  When Service Matters
                </h3>
                <h3 class="slide-sub-title" data-animation-in="slideInLeft">
                  Your Choice is Simple
                </h3>
                <p data-animation-in="slideInRight">
                  <Link  to="/services" class="slider btn btn-primary "style={{backgroundColor:"#BC4B26"}}>
                    Our Services
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="banner-carousel-item"
        style={{ backgroundImage: `url("images/slider-main/banner2.jpg")` }}
      >
        <div class="slider-content text-right">
          <div class="container h-100">
            <div class="row align-items-center h-100">
              <div class="col-md-12">
                <h2 class="slide-title" data-animation-in="slideInDown">
                  Meet Our Engineers
                </h2>
                <h3 class="slide-sub-title" data-animation-in="fadeIn">
                Our experts will help you find the perfect property to invest in!
                </h3>
                <p
                  class="slider-description lead"
                  data-animation-in="slideInRight"
                >
                  We will deal with your failure that determines how you achieve
                  success.
                </p>
                <div data-animation-in="slideInLeft">
                  {/* <a
                    href="contact.html"
                    class="slider btn btn-primary"
                    aria-label="contact-with-us"
                  >
                    Get Free Quote
                  </a> */}
                  {/* <a
                    href="about.html"
                    class="slider btn btn-primary border"
                    aria-label="learn-more-about-us"
                  >
                    Learn more
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>

    <section class="call-to-action-box no-padding"
     data-aos="fade-up"
     data-aos-offset="200"
     data-aos-delay="50"
     data-aos-duration="1000"
     data-aos-easing="ease-in-out"
     data-aos-mirror="true"
     data-aos-once="false"
    >
  <div class="container">
    <div class="action-style-box   rounded-3" style={{background:"#BC4B26"}}>
        <div class="row align-items-center">
          <div class="col-md-8 text-center text-md-left">
              <div class="call-to-action-text">
                <h3 class="action-title">Best properties for investment or living in Bangladesh</h3>
              </div>
          </div> 
          <div class="col-md-4 text-center text-md-right mt-3 mt-md-0">
              <div class="call-to-action-btn">
                <a class="btn btn-dark" href="#">Free Dial +8801738145656</a>
              </div>
          </div> 
        </div> 
    </div> 
  </div> 
</section> 
    </div>
  );
};

export default Banner;
