import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Have questions or ready to take the next step on your fitness journey? Contact us today, and
        our friendly team will be delighted to assist you. Your path to a healthier, stronger, and
        happier you begins here.
      </Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href=" " target="_blank" rel="noreferrer noopener">
              <MdEmail />
            </a>
            <a href="https://www.facebook.com/ " target="_blank" rel="noreferrer noopener">
              <BsMessenger />
            </a>
            <a href=" " target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
