import React from "react";
import aboutUsImg from "../../assets/about-us-logo.png";
import serviceImg from "../../assets/service-logo.png";
import contactImg from "../../assets/contact-logo.png";
import "../../index.css";

const SectionItem = ({
  imgSrc,
  number,
  title,
}: {
  imgSrc: string;
  number: string;
  title: string;
}) => (
  <div className="relative">
    <img src={imgSrc} alt={title.toLowerCase()} />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
      <span className="text-8xl font-light leading-none tracking-normal font-customRegular">
        {number}.
      </span>
      <div className="flex flex-col items-center gap-2">
        <span className="text-2xl tracking-[0.2em] font-bold">{title}</span>
      </div>
    </div>
  </div>
);

export const HomePage = () => {
  return (
    <>
      <section className="first-section container mx-auto p-14 overflow-x-scroll">
        <div className="flex flex-row gap-6 lg:w-full w-[1000px]">
          <SectionItem imgSrc={aboutUsImg} number="01" title="ABOUT US" />
          <SectionItem imgSrc={serviceImg} number="02" title="SERVICE" />
          <SectionItem imgSrc={contactImg} number="03" title="CONTACT" />
        </div>
      </section>
      <section className="second-section"></section>
    </>
  );
};
