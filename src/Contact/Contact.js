import React from "react";
import "../Contact/Contact.css";

const ContactForm = () => {

  return (
    <div className="contact-us">
      <div class="contact-form">
        <img src="img/shape.png" class="square" alt="" />
        <div class="form">
          <div class="contact-info">
            <h3 class="title">Let's get in touch</h3>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div class="info">
              <div class="information">
                <i class="fas fa-map-marker-alt"></i>

                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div class="information">
                <i class="fas fa-envelope"></i>
                <p>lorem@ipsum.com</p>
              </div>
              <div class="information">
                <i class="fas fa-phone"></i>
                <p>123-456-789</p>
              </div>
            </div>

            <div class="social-media">
              <p>Connect with us :</p>
              <div class="social-icons">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-formm">
            <form action="index.html" autocomplete="off">
              <h3 class="title">Contact us</h3>
              <div class="input-container">
                <input type="text" name="name" class="input" placeholder="Username"/>
                <span>Username</span>
              </div>
              <div class="input-container">
                <input type="email" name="email" class="input" placeholder="Email"/>
                <span>Email</span>
              </div>
              <div class="input-container">
                <input type="tel" name="phone" class="input"  placeholder="Phone"/>
                <span>Phone</span>
              </div>
              <div class="input-container textarea">
                <textarea name="message" class="input" placeholder="Message"></textarea>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" class="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
