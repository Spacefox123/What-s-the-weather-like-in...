// import React from 'react';

const Footer = () => {
  return (
    <div className="footermain card">
      <div className="icons">
        <a
          href="https://www.facebook.com/zan.rode/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-facebook fa-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/zanrcomedy/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        <a
          href="https://github.com/Spacefox123"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/%C5%BEan-rode-09053318a/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin-in fa-2x"></i>
        </a>
      </div>
      <div className="footer ">
        <p className="footer__text lightest-blue">
          © {`${new Date().getFullYear()}`} - MyWeatherApp | Website developed
          by{" "}
          <a
            href="https://github.com/spacefox123"
            target="_blank"
            rel="noopener noreferrer"
          >
            Žan Rode
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
