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
        toast("SEND SUCCESSFULLY")
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div>
      <section id="main-container" className="main-container contact">
        <h1 className='text-center text-light banner-title mt-5 pt-5'>Contact</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 justify-content-center align-items-center d-flex p-4">
              <form id="contact-form" method="post" onSubmit={sendEmail} className="p-4 mx-auto border rounded-4 contactform">
                <h3 className="column-title text-center mt-2" style={{color:"black"}}>We love to hear</h3>
                <div className="row">
                  <div className="">
                    <div className="form-group">
                      <label>Name</label>
                      <input className="form-control" name="name" id="name" placeholder=" " type="text" required />
                    </div>
                  </div>
                  <div className="">
                    <div className="form-group">
                      <label>Email</label>
                      <input className="form-control form-control-email" name="email" id="email" placeholder="" type="email" required />
                    </div>
                  </div>
                  <div className="">
                    <div className="form-group">
                      <label>Subject</label>
                      <input className="form-control form-control-subject" name="subject" id="subject" placeholder="" type="text" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control form-control-message" type="text" name="message" id="message" placeholder="" rows="10" required></textarea>
                </div>
                <div className="text-right"><br />
                  <input className="btn btn-primary solid blank" type="submit" value="Send Message" style={{background:"#BC4B26"}}/>
                </div>
              </form>
            </div>
          </div>

          <div className='align-items-center justify-content-center d-flex p-4'>
            <iframe 
              className='border rounded-3'
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5472813277747!2d89.25899231501953!3d25.745020300554458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ0JzQyLjEiTiA4OcKwMTUnNDAuMyJF!5e0!3m2!1sen!2sbd!4v1656438858353!5m2!1sen!2sbd`}
              style={{width:"100%", height:"450px", border:"0"}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;