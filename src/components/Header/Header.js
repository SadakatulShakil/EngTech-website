import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";
import logo from "../../assets/logo.jpg";
import "./Header.css";
import Popup from "../Popup/Popup";
import banner from "../../assets/topbanner.png";
import email from "../../assets/email.png";
import phone from "../../assets/telephone.png";

const Header = () => {
  return (
    <div>
      {/* <div className="container">
<div class="row   ">
  <img className="banner" src={banner} alt=""/>
</div>

</div> */}

      <header id="header" class="header-one navbar-fixed"
       data-aos="fade-down"
       data-aos-offset="200"
       data-aos-delay="50"
       data-aos-duration="1000"
       data-aos-easing="linear"
    
      //  data-aos-mirror="true"
      //  data-aos-once="false"
      // flex   flex-col md:flex-row
      >
        {/* <div class=" ">
          <div class="container-fluid  ">
            <div className="">
            <div class="  row   flex-container d-flex justify-content-between align-items-center ">
              <div className="col-lg-2 item   ">
                <div>
                  <a class="d-block " href="/">
                    <img
                      className="mylogo rounded my-1"
                      loading="lazy"
                      src={banner}
                      style={{ width: "300px", height: "80px" }}
                      alt="Constra"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-4 item  ">
                <nav
                  class="navbar navbar-expand-lg navbar-dark p-0 sticky top-0 navbar-fixed mt-3 "
                  id="navbar"
                >
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    aria-controls="navbar-collapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon" id="nav-bar"></span>
                  </button>

                  <div id="navbar-collapse" class="collapse navbar-collapse ">
                    <ul class="nav navbar-nav mr-auto Header p-2 ">
                      <li
                        class="nav-item Header"
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbar-collapse"
                         aria-label="Toggle navigation"
                      >
                         <NavLink
                          to="/"
                          class="dropdown-toggle    "
                          aria-current="page"
                         
                        >
                          Home
                        </NavLink>
                      </li>
                      <li
                        class="nav-item Header "
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbar-collapse"
                      
                        aria-label="Toggle navigation"
                      >
                        
                        <NavLink
                          to="/about"
                          class="  dropdown-toggle"
                          data-toggle=""
                          aria-current="page"
                        >
                          About us
                        </NavLink>
                      </li>
                      <li
                        class="nav-item Header   "
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbar-collapse"
                     
                        aria-label="Toggle navigation"
                      >
                     

                        <NavLink
                          to="/projects"
                          class="dropdown-toggle"
                          aria-current="page"
                         
                        >
                          Project
                        </NavLink>
                      </li>

                    

                      <li
                        class="nav-item Header "
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbar-collapse"
                         aria-label="Toggle navigation"
                      >
                         <NavLink
                          to="/services"
                          class="  dropdown-toggle"
                          aria-current="page"
                        >
                          Services
                        </NavLink>
                      </li>

                      <li
                        class="nav-item Header "
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbar-collapse"
                       
                        aria-label="Toggle navigation"
                      >
                         <NavLink
                          to="/contact"
                          class="  dropdown-toggle"
                          data-toggle=""
                          aria-current="page"
                        >
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
 
                </nav>
              </div>

              <div class="col-md-3 item  hotcontact " style={{ lineHeight: "18px" }}>
               
            
            
               <small style={{ color: "white", fontWeight: "bolder" }}>
                  Email : info@royalbengalrealestate.com
                </small>{" "}
                 
                <small style={{ color: "white ", fontWeight: "bolder" }}>
                  Mobile : +8801738145656
                </small>
         
          
              </div>
            </div>
            </div>
          </div>
        </div> */}
         <div class="  ">
        <div class=" container-fluid   ">
          <div class="logo-area">
              <div class="row align-items-center">
                <div class="logo   col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                    <a class="d-block my-1" href="#">
                      <img loading="lazy rounded" src={banner} alt="Constra"/>
                    </a>
                </div> 
      
                <div class="col-lg-9 header-right">
                <div class="site-navigation">
        <div class="container">
            <div class="row  ">
            
             <div className="   d-flex align-items-center   ">
             <div class="col-lg-8    ">
                  <nav class="navbar navbar-expand-lg navbar-dark p-0">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div id="navbar-collapse" class="collapse navbar-collapse">
                        <ul class="nav navbar-nav mr-auto">
                        {/* <li class="nav-item"><a class="" href="/">Home</a></li> */}
                        
                        <li
                        class="nav-item Header "
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbar-collapse"
                       
                        aria-label="Toggle navigation"
                      >
                         <NavLink
                          to="/"
                          class="  dropdown-toggle"
                          data-toggle=""
                          aria-current="page"
                        >
                          Home
                        </NavLink>
                      </li>
                        <li
                        class="nav-item Header "
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbar-collapse"
                       
                        aria-label="Toggle navigation"
                      >
                         <NavLink
                          to="/services"
                          class="  dropdown-toggle"
                          data-toggle=""
                          aria-current="page"
                        >
                          Services
                        </NavLink>
                      </li>
                        <li
                        class="nav-item Header "
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbar-collapse"
                       
                        aria-label="Toggle navigation"
                      >
                         <NavLink
                          to="/projects"
                          class="  dropdown-toggle"
                          data-toggle=""
                          aria-current="page"
                        >
                          Projects
                        </NavLink>
                      </li>
                        <li
                        class="nav-item Header "
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbar-collapse"
                       
                        aria-label="Toggle navigation"
                      >
                         <NavLink
                          to="/about"
                          class="  dropdown-toggle"
                          data-toggle=""
                          aria-current="page"
                        >
                          About Us
                        </NavLink>
                      </li>
                        <li
                        class="nav-item Header "
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbar-collapse"
                       
                        aria-label="Toggle navigation"
                      >
                         <NavLink
                          to="/contact"
                          class="  dropdown-toggle"
                          data-toggle=""
                          aria-current="page"
                        >
                       Contact
                        </NavLink>
                      </li>
    
                          {/* <li class="nav-item"><a class="" href="/services">Services</a></li> */}
                  
                          {/* <li class="nav-item"><a class=" " href="/projects">Projects</a></li> */}
                          {/* <li class="nav-item"><a class=" " href="/about">About Us</a></li> */}
                  
                          {/* <li class="nav-item"><a class="" href="/contact">Contact</a></li> */}
                  
                         
                  
                         
                  
                          {/* <li class="nav-item"><a class="/services" href="/services">Contact</a></li> */}
                        </ul>
                    </div>
                  </nav>
              </div>
              <div class=" col-lg-4    hotcontact " style={{ lineHeight: "18px" }}>
               
          <div className="d-flex align-items-center   p-1  ">
          <img className="mr-2  " src={email} alt="" style={{width:"30px"}} />
            
            <small style={{ color: "white", fontWeight: "bolder" }}>
                 info@engtech.com.bd
             </small>{" "}
          </div>
          <div className="d-flex align-items-center  p-1  ">
          <img className="  mr-2 " src={phone} alt="" style={{width:"30px"}} />
            
            <small style={{ color: "white", fontWeight: "bolder" }}>
            Mobile : +8801738145656
             </small>{" "}
          </div>
                 
                {/* <small style={{ color: "white ", fontWeight: "bolder" }}>
                  Mobile : +8801738145656
                </small> */}
         
          
              </div>
             </div>
              
            
            </div>
            
    
             
        </div>
        
    
      </div>  
                </div> 
              </div> 
      
          </div> 
        </div> 
      </div>
      </header>
    </div>
  );
};

export default Header;
