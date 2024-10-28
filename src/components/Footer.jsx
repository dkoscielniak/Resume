import React from "react";
import GitHub from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHub />
        <EmailIcon />
        <InstagramIcon />
        <FacebookIcon />
      </div>
      <p>&copy; 2024 dkoscielniak.com</p>
    </div>
  );
}

export default Footer;
