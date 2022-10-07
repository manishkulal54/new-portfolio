import React from "react";
import "../stylingsheets/Footer.css";

export default function Footer() {
  return (
    <div className="container_f">
      <div className="subcontainer_f">
        <div className="icons">
       <a href="mailto:manishkulal54@gmail.com" rel="noreferre"><i className="fa-regular fa-envelope"></i></a>
       <a href="https://wa.me/+919741933493" rel="noreferre"><i className="fa-brands fa-whatsapp"></i></a>
       <a href="https://www.instagram.com/manishkulal54/" rel="noreferre"><i className="fa-brands fa-instagram"></i></a>
       <a href="https://www.linkedin.com/in/manish-kulal-530479170/" rel="noreferre"><i className="fa-brands fa-linkedin-in"></i></a>
       <a href="https://www.facebook.com/manish.kulal.10004" rel="noreferre"><i className="fa-brands fa-facebook"></i></a>
       <a href="https://github.com/manishkulal54" rel="noreferre"><i className="fa-brands fa-github"></i></a>
       <a href="href=tel:+919741933493" rel="noreferre"><i className="fa-solid fa-phone"></i></a>
        </div>
        <div className="stLine"></div>
        <div className="fooText">
        <p>&copy; : manishkulal.netlify.app | 2022</p>
        </div>
      </div>
    </div>
  );
}
