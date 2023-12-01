import React from "react";

const Footer = ({ links }) => {
  return (
    <footer>
      <div className="footer-center">
        <p>Devoloped by Said-MZ {new Date().getFullYear()}</p>
        <div className="footer-links">
          {links.map((link) => {
            return (
              <a key={link.link} href={link.link}>
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
