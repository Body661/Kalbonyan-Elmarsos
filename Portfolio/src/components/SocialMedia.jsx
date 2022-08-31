import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.instagram.com/abdolrahman_elhagrasy/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsInstagram />
        </div>
      </a>

      <a
        href="https://www.facebook.com/abdolrahman.salehelhagrasy"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FaFacebookF />
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/abdolrahman-saleh-elhagrasy-9b394a221/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
