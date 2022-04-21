import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="pt-44 pb-24 container clear-left">
      <div className="max-w-screen-xl w-full mx-auto text-center text-4xl">
          KEEP IN TOUCH
      </div>
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="flex mt-10">
          <div className="flex justify-center w-full -mx-2">
            <div className="mx-5 rounded-full items-center justify-center p-2 shadow-md text-5xl">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="mx-5 rounded-full items-center justify-center p-2 shadow-md text-5xl">
              <i className="fa-brands fa-telegram"></i>
            </div>
            <div className="mx-5 rounded-full items-center justify-center p-2 shadow-md text-5xl">
              <i className="fa-brands fa-medium"></i>
            </div>
            <div className="mx-5 rounded-full items-center justify-center p-2 shadow-md text-5xl">
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
