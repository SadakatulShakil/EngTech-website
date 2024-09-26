import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg"

const Footer = () => {
     return (
  //        
  <footer id="footer" class="footer  mt-5">
    <div class="footer-main">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-4 col-md-6 footer-widget footer-about">
            <h3 class="widget-title">About Us</h3>
            {/* <img loading="lazy" width="200px" class="footer-logo" src="images/footer-logo.png" alt="Constra"/> */}
            <p>We're embarked on a mission to revolutionize the landscape of the real estate field.</p>
            
          </div> 

          <div class="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
            <h3 class="widget-title">CONNECT WITH US SOCIALLY</h3>
            <div class="footer-social">
              <ul>
                <li><a href="https://facebook.com" aria-label="Facebook"><i
                      class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                </li>
                <li><a href="https://instagram.com" aria-label="Instagram"><i
                      class="fab fa-instagram"></i></a></li>
                {/* <li><a href="https://github.com/themefisher" aria-label="Github"><i class="fab fa-github"></i></a></li> */}
              </ul>
            </div> 
          </div> 

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
            <h3 class="widget-title">Services</h3>
            <ul class="list-arrow">
              <li><a href=" ">LANDLORD SERVICES</a></li>
              <li><a href=" ">BUILDING REMODELS</a></li>
              <li><a href=" ">INTERIOR DESIGN</a></li>
              <li><a href=" ">EXTERIOR DESIGN</a></li>
              <li><a href=" ">RENOVATION</a></li>
              <li><a href=" ">SAFETY MANAGEMENT</a></li>
            </ul>
          </div> 
        </div> 
      </div> 
    </div> 

    <div class="copyright">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-12">
            <div class="copyright-info text-center">
              <span className='text-white'>Copyright &copy; <script>
                  document.write(new Date().getFullYear())
                </script>, Designed &amp; Developed by <a href="https://samtechnobd.com">GalaxyDigital(Software Farm)</a></span>
            </div>
          </div>

        
        </div> 

        <div id="back-to-top" data-spy="affix" data-offset-top="10" class="back-to-top position-fixed">
          <button class="btn btn-primary" title="Back to Top">
            <i class="fa fa-angle-double-up"></i>
          </button>
        </div>

      </div> 
    </div> 
  </footer>
     );
};

export default Footer;