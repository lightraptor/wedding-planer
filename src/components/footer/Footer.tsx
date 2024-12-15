import React from "react";
import logoImg from "../../assets/wedding-logo.png";

export const Footer = () => {
  return (
    <footer className="py-10 px-5 md:px-10 bg-primary text-white">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between w-full md:w-auto">
          <div className="mb-3 md:mb-0 md:mr-20">
            <div className="mb-3 md:mb-10">
              <img src={logoImg} alt="logo" className="w-[273px] md:w-60" />
            </div>
            <ul className="text-lg md:text-2xl font-extralight">
              <li className="mb-3 ml-0 md:ml-10">About us</li>
              <li className="mb-3 ml-0 md:ml-10">Services</li>
              <li className="mb-3 ml-0 md:ml-10">Support</li>
            </ul>
          </div>
          <div className="mb-3 md:mb-0 md:mr-20">
            <h2 className="text-[18px] md:text-[26px] mb-8 md:mb-14 mt-0 md:mt-3 font-customRegular">
              Follow us
            </h2>
            <ul className="text-lg md:text-2xl font-extralight">
              <li className="mb-3">Instagram</li>
              <li className="mb-3">Facebook</li>
              <li className="mb-3">LinkedIn</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[18px] md:text-[26px] mb-8 md:mb-14 mt-0 md:mt-3 font-customRegular">
              Contact us
            </h2>
            <ul className="text-lg md:text-2xl font-extralight">
              <li className="mb-3">+89 907 93 7678</li>
              <li className="mb-3">event.production@quyplanner.com</li>
              <li className="mb-3">10C, Ly Chieu Hoang St., W.10, D.6. HCMC</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center md:text-base mt-10 font-extralight">
        All right reserved QUÝ PLANNER 2024
      </div>
    </footer>
  );
};
