import React from "react";
import { Link } from "react-router-dom";
import sustainImg from "../../assets/sustain1.png";
import sustainImg2 from "../../assets/sustain2.png";
import leftArrow from "../../assets/leftArrow.png";

export const SustainabilityPage = () => {
  return (
    <>
      <img src={sustainImg} alt="" className="mt-12 sm:mt-24 w-full" />
      <div className="flex flex-col sm:flex-row p-6 sm:p-24 justify-between items-center">
        <p className="text-3xl sm:text-5xl font-customRegular sm:w-[60%] leading-relaxed text-primary tracking-[0.1em] text-center sm:text-left">
          SUSTAINABILITY
        </p>
        <Link to="/service">
          <button className="mt-4 sm:mt-0">
            <img src={leftArrow} alt="" className="w-12 h-12 sm:w-20 sm:h-20" />
          </button>
        </Link>
      </div>
      <img src={sustainImg2} alt="" className="w-full" />
      <div className="container px-6 sm:px-0 py-12 sm:py-40 font-light text-primary font-sans text-lg sm:text-[26px] text-center mx-auto w-full sm:w-[70%]">
        <p className="mb-6 sm:mb-9">
          We are committed to minimizing our environmental impact, supporting
          our local communities, and operating in a socially responsible way.
        </p>
        <p className="mb-6 sm:mb-9">
          We recognize that our business activities have an impact on the
          environment, society, and the economy, and we are committed to
          minimizing that impact and creating a sustainable future.
        </p>
        <p className="mb-6 sm:mb-9">
          Through our sustainability strategy, we are focused on reducing our
          carbon footprint, conserving natural resources, and supporting the
          communities where we operate. We have set ambitious targets to reduce
          our greenhouse gas emissions, water usage, and waste generation, and
          we are continually striving to improve our performance in these areas.
        </p>
      </div>
    </>
  );
};
