import React from "react";
import aboutImg from "../../assets/man-proposing-girlfriend-with-diamond-ring.png";
import aboutImg1 from "../../assets/pexels-taryn-elliott-6314334.png";

export const AboutPage = () => {
  return (
    <>
      <section className="w-full py-20 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[55%] mb-8 lg:mb-0">
          <img src={aboutImg} alt="" className="w-full" />
        </div>
        <div className="w-full lg:w-[45%] p-4 lg:p-16 lg:pr-0 lg:pb-0 flex md:flex-col flex-col-reverse">
          <img src={aboutImg1} alt="" className="w-full mb-4 lg:mb-0" />
          <div className="text-[32px] lg:text-[64px] font-customRegular">
            <p className=" lg:mt-8 lg:mb-0 mb-8 text-center lg:text-left">
              ABOUT US
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
