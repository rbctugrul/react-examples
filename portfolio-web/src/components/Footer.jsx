import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <BsFacebook />
        <BsInstagram />
        <BsLinkedin />
        <BsTwitter />
      </div>
      <p> &copy; 2024 rbctugrul</p>
    </div>
  );
}

export default Footer;
