import React from "react";
import "./footer.css";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function footer() {
  return (
    <footer>
      <div className="container">
        <div className="social">
          <div className="soci">
            <FaGithub />
          </div>
          <div className="soci">
            <FaInstagram />
          </div>
          <div className="soci">
            <FaTwitter />
          </div>
        </div>
        <div className="copyright">Copyright &copy; 2022Rbctugrul</div>
      </div>
    </footer>
  );
}

export default footer;
