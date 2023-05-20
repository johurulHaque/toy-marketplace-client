import React from "react";
import logo from "../../../assets/toy.png";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaMailBulk,
  FaFacebook,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 mt-9  bg-[url('/footer.png')] h-[100%] text-base-content">
      <div>
        <img src={logo} alt="" className="w-36" />
        <p>
          Toys Home Ltd.
          <br />
          <p>Copyright © 2023 - All right reserved</p>
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">FAQs</a>
        <a className="link link-hover">Why Choses us </a>        
      </div>

      <div>
        <span className="footer-title">PRODUCT</span>
        <a className="link link-hover">Legal Notice</a>
        <a className="link link-hover">Delivery</a>
        <a className="link link-hover">Prices drop</a>
        <a className="link link-hover">New products</a>        
      </div>
      <div>
        <span className="footer-title">CONTACT INFORMATION</span>
        <a className="link link-hover flex gap-2">
          <FaMapMarkerAlt />
          4005, Silver business point USA
        </a>
        <a className="link link-hover flex gap-2">
          <FaPhone />
          123 456 789
        </a>
        <a className="link link-hover flex gap-2">
          <FaMailBulk />
          info@gmail.com
        </a>
        <div className="flex gap-3">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebook className="text-2xl text-[#09ccd0]" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram className="text-2xl text-[#09ccd0]" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter className="text-2xl text-[#09ccd0]" />
          </a>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
