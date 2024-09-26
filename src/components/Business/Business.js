import React from 'react';
import client from "../../assets/customers.png"
import experts from "../../assets/leadership.png"
import  law from "../../assets/law.png"
const Business = () => {
     return (
          <section id="facts" class="facts-area dark-bg"
          data-aos="flip-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          >
  <div class="container border border-white ">
    <div class="facts-wrapper">
        <div class="row ">
        <h3 class="section-sub-title  py-5  " style={{color:"#FFFFFF"}}>WHY CHOOSE US</h3>

          <div class="col-md-4 border border-white col-sm-6 ts-facts">
              <div class="ts-facts-img">
                <img className='w-25' loading="lazy" src={client} alt="facts-img"/>
                
              </div>
              <div class="ts-facts-content">
                {/* <h2 class="ts-facts-num"><span class="counterUp" data-count="1789">0</span></h2> */}
                <h3 class="ts-facts-title p-3">WE HAVE 1000'S OF SATISFIED CUSTOMERS</h3>
                <p>Who have purchased property through us. These customers continue to buy property through us.</p>
              </div>
          </div> 

          <div class="col-md-4 border border-white col-sm-6 ts-facts mt-5 mt-sm-0">
              <div class="ts-facts-img">
                <img className='w-25' loading="lazy" src={experts} alt="facts-img"/>
              </div>
              <div class="ts-facts-content">
                {/* <h2 class="ts-facts-num"><span class="counterUp" data-count="1789">0</span></h2> */}
                <h3 class="ts-facts-title p-3">ADVICE FROM EXPERTS</h3>
                <p>We are happy to help you find the right property to suit your needs.</p>
              </div>
          </div> 

          <div class="col-md-4 border border-white col-sm-6 ts-facts mt-5 mt-md-0">
              <div class="ts-facts-img">
                <img className='w-25' loading="lazy" src={law} alt="facts-img"/>
              </div>
              <div class="ts-facts-content">
                {/* <h2 class="ts-facts-num"><span class="counterUp" data-count="1789">0</span></h2> */}
                <h3 class="ts-facts-title p-3">SELECT FROM AN ENDLESS RANGE OF OPTIONS</h3>
                <p>Select from all the options that suit your budget and needs.</p>
              </div>
          </div> 

          {/* <div class="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
              <div class="ts-facts-img">
                <img loading="lazy" src="images/icon-image/fact4.png" alt="facts-img"/>
              </div>
              <div class="ts-facts-content">
                <h2 class="ts-facts-num"><span class="counterUp" data-count="44">0</span></h2>
                <h3 class="ts-facts-title">Countries Experience</h3>
              </div>
          </div>  */}

        </div> 
    </div>
  
  </div>
   
</section> 
     );
};

export default Business;