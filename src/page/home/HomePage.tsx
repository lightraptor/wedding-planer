import React from "react";
import aboutUsImg from "../../assets/about-us-logo.png";
import serviceImg from "../../assets/service-logo.png";
import contactImg from "../../assets/contact-logo.png";

export const HomePage = () => {
  return (
    <>
      <section className="first-section container mx-auto p-14 overflow-x-scroll">
        <div className="flex flex-row gap-6 lg:w-full w-[1000px]">
          <div className="relative">
            <img src={aboutUsImg} alt="aboutus" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
              <span className="text-7xl font-light mb-4">01.</span>
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl tracking-[0.2em] font-bold">
                  ABOUT US
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={serviceImg} alt="aboutus" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
              <span className="text-7xl font-light mb-4">02.</span>
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl tracking-[0.2em] font-bold">
                  SERVICE
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={contactImg} alt="aboutus" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
              <span className="text-7xl font-light mb-4">03.</span>
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl tracking-[0.2em] font-bold">
                  CONTACT
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="second-section"></section>
    </>
  );
};
