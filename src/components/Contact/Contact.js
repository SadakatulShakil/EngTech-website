import React from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css'; 
import { toast } from 'react-toastify';
import "./Contact.css";


const Contact = () => {


  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pskgdpw', 'template_kyal10i', e.target, '6RHmK6EVFEtu1sjQQ')
      .then((result) => {
          // console.log(result.text);
          toast("SEND SUCCESSFULLY")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
     return (
          <div>
       
   


<section id="main-container" class="main-container contact    ">
  <h1 className='text-center text-light banner-title mt-5 pt-5 '  >Contact</h1>

 
 <div class="container-fluid ">

 


    <div class="row ">
      <div class="col-md-12 justify-content-center align-items-center d-flex p-4  ">
        
     
        <form id="contact-form"  method="post"   onSubmit={sendEmail} className=" p-4 mx-auto   border rounded-4  contactform" >
        <h3 class="column-title text-center mt-2" style={{color:"black"}}>We love to hear</h3>
          <div class="row">
            <div class=" ">
              <div class="form-group">
                <label  >Name</label>
                <input class="form-control   "   name="name" id="name" placeholder=" " type="text" required />
              </div>
            </div>
            <div class="  ">
              <div class="form-group">
                <label  >Email</label>
                <input class="form-control   form-control-email" name="email" id="email" placeholder="" type="email"
                  required />
              </div>
            </div>
            <div class=" ">
              <div class="form-group">
                <label  >Subject</label>
                <input class="form-control   form-control-subject" name="subject" id="subject" placeholder="" type="text"   />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label  >Message</label> 
            <textarea class="form-control form-control-message   " type="text" name="message" id="message" placeholder="" rows="10"
              required></textarea>
          </div>
          <div class="text-right"><br></br>
            {/* <button class="btn btn-primary solid blank" type="submit" style={{background:"#BC4B26"}}>Send Message</button> */}
            <input class="btn btn-primary solid blank" type="submit" value="Send Message" style={{background:"#BC4B26"}}/>
          </div>
        </form>
      </div>

    </div> 
      
  <div className='align-items-center justify-content-center d-flex p-4'>
<iframe className='broder rounded-3' 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1529895842637!2d90.37355931434828!3d23.74192319501847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b95463d9cc49%3A0x26f7bc45c034c899!2sDhanmondi!5e0!3m2!1sen!2sbd!4v1656438858353!5m2!1sen!2sbd" style={{width:"100%",height:"450px",border:"0"}}   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 </div>
 <div>
 {/* <iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=40.7127837,-74.0059413&amp;key=YOUR_API_KEY"></iframe> */}

 </div>
  </div> 


{/*   
  <div className='align-items-center justify-content-center d-flex p-4'>
<iframe className='broder rounded-3' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1529895842637!2d90.37355931434828!3d23.74192319501847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b95463d9cc49%3A0x26f7bc45c034c899!2sDhanmondi!5e0!3m2!1sen!2sbd!4v1656438858353!5m2!1sen!2sbd" style={{width:"100%",height:"450px",border:"0"}}   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 </div> */}


 
</section>



 

          </div>
     );
};

export default Contact;