import React from "react";
import contactImg from "../../assets/valentine-s-celebration-logo.png";
import fbLogo from "../../assets/fb-logo.png";
import linkedLogo from "../../assets/linkedin-logo.png";
import instaLogo from "../../assets/insta-logo.png";
export const ContactPage = () => {
  return (
    <>
      <div className="text-primary">
        <img src={contactImg} alt="" className="w-full" />
        <p className="text-center text-[64px] my-14 font-customRegular ">
          CONTACT US
        </p>
        <p className="text-center text-2xl font-light tracking-[0.1em]">
          <span className="font-bold">M:</span> + 84 907 937 678
        </p>
        <p className="text-center mt-5 text-2xl font-light tracking-[0.1em]">
          <span className="font-bold">E:</span> event.production@quyplanner.com
        </p>
        <div className="w-[200px] h-[1px] bg-primary my-20 mx-auto"></div>
        <p className="text-center w-2/5 mx-auto text-2xl font-light tracking-[0.1em] mb-7">
          <span className="font-bold">HCM office:</span> 10C Ly Chieu Hoang St,
          Ward 10, District 6, Ho Chi Minh City
        </p>
        <p className="text-center w-2/5 mx-auto text-2xl font-light tracking-[0.1em] mb-5">
          <span className="font-bold">Phu Quoc Representative:</span> Hillside
          Apt, Sunset Town, An Thoi Ward, PQ City
        </p>
        <div className="flex flex-row gap-4 w-fit mx-auto my-20">
          <img
            src={fbLogo}
            alt=""
            style={{
              filter:
                "invert(50%) sepia(10%) saturate(350%) hue-rotate(200deg) brightness(65%)",
            }}
            className="w-14 h-14"
          />
          <img
            src={linkedLogo}
            alt=""
            style={{
              filter:
                "invert(50%) sepia(10%) saturate(350%) hue-rotate(200deg) brightness(65%)",
            }}
            className="w-14 h-14"
          />
          <img
            src={instaLogo}
            alt=""
            style={{
              filter:
                "invert(50%) sepia(10%) saturate(350%) hue-rotate(200deg) brightness(65%)",
            }}
            className="w-14 h-14"
          />
        </div>
      </div>
    </>
  );
};
