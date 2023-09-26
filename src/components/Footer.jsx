import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <h2>GymFinity</h2>
          </Link>
          <p>Have questions or ready to take the next step on your fitness journey?</p>
          <div className="footer__socials">
            <a href="https://www.linkedin.com/ " target="_blank" rel="noreferrer noopener">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/ " target="_blank" rel="noreferrer noopener">
              <AiOutlineTwitter />
            </a>
            <a href="https://instagram.com/ " target="_blank" rel="noreferrer noopener">
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/constact">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Plans</Link>
          <Link to="/s">Trainers</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small> &copy; GymFinity </small>
      </div>
    </footer>
  );
};

export default Footer;
