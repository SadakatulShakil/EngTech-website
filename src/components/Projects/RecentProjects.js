import React from 'react';
// import "./RecentProjects.css"
import banner from "../../assets/topbanner.png";
const RecentProjects = () => {
     return (
         
      <header id="header" class="header-one">
      <div class="bg-white">
        <div class="container">
          <div class="logo-area">
              <div class="row align-items-center">
                <div class="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                    <a class="d-block" href="index.html">
                      <img loading="lazy" src={banner} alt="Constra"/>
                    </a>
                </div> 
      
                <div class="col-lg-9 header-right">
                <div class="site-navigation">
        <div class="container">
            <div class="row">
              <div class="col-lg-12">
                  <nav class="navbar navbar-expand-lg navbar-dark p-0">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div id="navbar-collapse" class="collapse navbar-collapse">
                        <ul class="nav navbar-nav mr-auto">
                          <li class="nav-item dropdown active">
                              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Home <i class="fa fa-angle-down"></i></a>
                               
                          </li>
    
                          <li class="nav-item dropdown">
                              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Company <i class="fa fa-angle-down"></i></a>
                              <ul class="dropdown-menu" role="menu">
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="team.html">Our People</a></li>
                                <li><a href="testimonials.html">Testimonials</a></li>
                                <li><a href="faq.html">Faq</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                              </ul>
                          </li>
                  
                          <li class="nav-item dropdown">
                              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Projects <i class="fa fa-angle-down"></i></a>
                              <ul class="dropdown-menu" role="menu">
                                <li><a href="projects.html">Projects All</a></li>
                                <li><a href="projects-single.html">Projects Single</a></li>
                              </ul>
                          </li>
                  
                          <li class="nav-item dropdown">
                              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Services <i class="fa fa-angle-down"></i></a>
                              <ul class="dropdown-menu" role="menu">
                                <li><a href="services.html">Services All</a></li>
                                <li><a href="service-single.html">Services Single</a></li>
                              </ul>
                          </li>
                  
                          <li class="nav-item dropdown">
                              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Features <i class="fa fa-angle-down"></i></a>
                              <ul class="dropdown-menu" role="menu">
                                <li><a href="typography.html">Typography</a></li>
                                <li><a href="404.html">404</a></li>
                                <li class="dropdown-submenu">
                                    <a href="#!" class="dropdown-toggle" data-toggle="dropdown">Parent Menu</a>
                                    <ul class="dropdown-menu">
                                      <li><a href="#!">Child Menu 1</a></li>
                                      <li><a href="#!">Child Menu 2</a></li>
                                      <li><a href="#!">Child Menu 3</a></li>
                                    </ul>
                                </li>
                              </ul>
                          </li>
                  
                          <li class="nav-item dropdown">
                              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">News <i class="fa fa-angle-down"></i></a>
                              <ul class="dropdown-menu" role="menu">
                                <li><a href="news-left-sidebar.html">News Left Sidebar</a></li>
                                <li><a href="news-right-sidebar.html">News Right Sidebar</a></li>
                                <li><a href="news-single.html">News Single</a></li>
                              </ul>
                          </li>
                  
                          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                  </nav>
              </div>
            
            </div>
            
    
            <div class="nav-search">
              <span id="search"><i class="fa fa-search"></i></span>
            </div> 
    
            <div class="search-block"  >
              <label for="search-field" class="w-100 mb-0">
                <input type="text" class="form-control" id="search-field" placeholder="Type what you want and enter"/>
              </label>
              <span class="search-close">&times;</span>
            </div> 
        </div>
        
    
      </div>  
                </div> 
              </div> 
      
          </div> 
        </div> 
      </div>
    
      {/* <div class="site-navigation">
        <div class="container">
            <div class="row">
              <div class="col-lg-12">
                  <nav class="navbar navbar-expand-lg navbar-dark p-0">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div id="navbar-collapse" class="collapse navbar-collapse">
                        <ul class="nav navbar-nav mr-auto">
                          <li class="nav-item dropdown active">
                              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Home <i class="fa fa-angle-down"></i></a>
                              <ul class="dropdown-menu" role="menu">
                                <li class="active"><a href="index.html">Home One</a></li>
                                <li><a href="index-2.html">Home Two</a></li>
                              </ul>
                          </li>
    
                          <li class="nav-item dropdown">
                              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Company <i class="fa fa-angle-down"></i></a>
                              <ul class="dropdown-menu" role="menu">
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="team.html">Our People</a></li>
                                <li><a href="testimonials.html">Testimonials</a></li>
                                <li><a href="faq.html">Faq</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                              </ul>
                          </li>
                  
                          <li class="nav-item dropdown">
                              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Projects <i class="fa fa-angle-down"></i></a>
                              <ul class="dropdown-menu" role="menu">
                                <li><a href="projects.html">Projects All</a></li>
                                <li><a href="projects-single.html">Projects Single</a></li>
                              </ul>
                          </li>
                  
                          <li class="nav-item dropdown">
                              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Services <i class="fa fa-angle-down"></i></a>
                              <ul class="dropdown-menu" role="menu">
                                <li><a href="services.html">Services All</a></li>
                                <li><a href="service-single.html">Services Single</a></li>
                              </ul>
                          </li>
                  
                          <li class="nav-item dropdown">
                              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Features <i class="fa fa-angle-down"></i></a>
                              <ul class="dropdown-menu" role="menu">
                                <li><a href="typography.html">Typography</a></li>
                                <li><a href="404.html">404</a></li>
                                <li class="dropdown-submenu">
                                    <a href="#!" class="dropdown-toggle" data-toggle="dropdown">Parent Menu</a>
                                    <ul class="dropdown-menu">
                                      <li><a href="#!">Child Menu 1</a></li>
                                      <li><a href="#!">Child Menu 2</a></li>
                                      <li><a href="#!">Child Menu 3</a></li>
                                    </ul>
                                </li>
                              </ul>
                          </li>
                  
                          <li class="nav-item dropdown">
                              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">News <i class="fa fa-angle-down"></i></a>
                              <ul class="dropdown-menu" role="menu">
                                <li><a href="news-left-sidebar.html">News Left Sidebar</a></li>
                                <li><a href="news-right-sidebar.html">News Right Sidebar</a></li>
                                <li><a href="news-single.html">News Single</a></li>
                              </ul>
                          </li>
                  
                          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                  </nav>
              </div>
            
            </div>
            
    
            <div class="nav-search">
              <span id="search"><i class="fa fa-search"></i></span>
            </div> 
    
            <div class="search-block"  >
              <label for="search-field" class="w-100 mb-0">
                <input type="text" class="form-control" id="search-field" placeholder="Type what you want and enter"/>
              </label>
              <span class="search-close">&times;</span>
            </div> 
        </div>
        
    
      </div> */}
      {/* <!--/ Navigation end --> */}
    </header>
     
         
     );
};

export default RecentProjects;