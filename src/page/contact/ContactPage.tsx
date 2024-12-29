import React from "react";
import contactImg from "../../assets/valentine-s-celebration-logo.png";
import fbLogo from "../../assets/fb-logo.png";
import linkedLogo from "../../assets/linkedin-logo.png";
import instaLogo from "../../assets/insta-logo.png";

export const ContactPage = () => {
  return (
    <>
      <div className="text-primary">
        {/* Hình ảnh logo */}
        <img src={contactImg} alt="Contact Logo" className="w-full" />

        {/* Tiêu đề */}
        <p className="text-center text-[32px] lg:text-[64px] my-8 lg:my-14 font-customRegular">
          CONTACT US
        </p>

        {/* Thông tin liên lạc */}
        <p className="text-center text-lg lg:text-2xl font-light tracking-wide">
          <span className="font-bold">M:</span> + 84 907 937 678
        </p>
        <p className="text-center mt-5 text-lg lg:text-2xl font-light tracking-wide">
          <span className="font-bold">E:</span> event.production@quyplanner.com
        </p>

        {/* Đường kẻ ngang */}
        <div className="w-[100px] lg:w-[200px] h-[1px] bg-primary my-10 lg:my-20 mx-auto"></div>

        {/* Địa chỉ văn phòng */}
        <p className="text-center w-4/5 lg:w-2/5 mx-auto text-lg lg:text-2xl font-light tracking-wide mb-5">
          <span className="font-bold">HCM office:</span> 10C Ly Chieu Hoang St,
          Ward 10, District 6, Ho Chi Minh City
        </p>
        <p className="text-center w-4/5 lg:w-2/5 mx-auto text-lg lg:text-2xl font-light tracking-wide mb-5">
          <span className="font-bold">Phu Quoc Representative:</span> Hillside
          Apt, Sunset Town, An Thoi Ward, PQ City
        </p>

        {/* Icon mạng xã hội */}
        <div className="flex flex-row gap-4 justify-center my-10 lg:my-20">
          <img
            src={fbLogo}
            alt="Facebook"
            className="w-10 h-10 lg:w-14 lg:h-14 filter brightness-75"
          />
          <img
            src={linkedLogo}
            alt="LinkedIn"
            className="w-10 h-10 lg:w-14 lg:h-14 filter brightness-75"
          />
          <img
            src={instaLogo}
            alt="Instagram"
            className="w-10 h-10 lg:w-14 lg:h-14 filter brightness-75"
          />
        </div>
      </div>
    </>
  );
};
