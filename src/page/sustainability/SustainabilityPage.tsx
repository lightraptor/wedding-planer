import React from "react";
import { Link } from "react-router-dom";
import sustainImg from "../../assets/sustain1.png";
import sustainImg2 from "../../assets/sustain2.png";
import leftArrow from "../../assets/leftArrow.png";

export const SustainabilityPage = () => {
  return (
    <>
      <img src={sustainImg} alt="" className="mt-24" />
      <div className="flex flex-row p-24 justify-between">
        <p className="text-5xl font-customRegular w-[60%] leading-normal text-primary tracking-[0.1em]">
          SUSTAINABILITY
        </p>
        <Link to="/service">
          <button>
            <img src={leftArrow} alt="" className="w-20 h-20" />
          </button>
        </Link>
      </div>
      <img src={sustainImg2} alt="" className="w-full" />
      <div className="container py-40 font-light text-primary font-san text-[26px] text-center mx-auto w-[70%]">
        <p className="mb-9">
          We are committed to minimizing our environmental impact, supporting
          our local communities, and operating in a socially responsible way
        </p>
        <p className="mb-9">
          We recognize that our business activities have an impact on the
          environment, society, and the economy, and we are committed to
          minimizing that impact and creating a sustainable future.
        </p>
        <p className="mb-9">
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
