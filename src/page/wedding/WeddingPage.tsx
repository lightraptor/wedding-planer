import React from "react";
import imgFeature from "../../assets/imgFeature.png";
import imgFeature2 from "../../assets/imgFeature2.png";
import leftArrow from "../../assets/leftArrow.png";
import weddingImg1 from "../../assets/wedding1.png";
import weddingImg2 from "../../assets/wedding2.png";
import weddingImg3 from "../../assets/wedding3.png";
import weddingImg4 from "../../assets/wedding4.png";
import weddingImg5 from "../../assets/wedding5.png";
import { Link } from "react-router-dom";

export const WeddingPage = () => {
  return (
    <>
      {/* Hình ảnh header */}
      <img src={imgFeature} alt="Feature Image" className="mt-24 w-full" />

      {/* Tiêu đề */}
      <div className="flex flex-col lg:flex-row p-8 lg:p-24 justify-between items-center text-center lg:text-left">
        <p className="text-2xl lg:text-5xl font-customRegular lg:w-[60%] leading-normal text-primary tracking-[0.1em]">
          FEATURED WEDDINGS & SPECIAL EVENTS
        </p>
        <Link to="/service" className="mt-8 lg:mt-0">
          <button>
            <img
              src={leftArrow}
              alt="Back"
              className="w-14 h-14 lg:w-20 lg:h-20"
            />
          </button>
        </Link>
      </div>

      {/* Hình ảnh chính */}
      <img src={imgFeature2} alt="Feature Image 2" className="w-full" />

      {/* Nội dung mô tả */}
      <div className="container p-8 lg:p-20 font-light text-primary font-san text-base lg:text-[26px] mx-auto">
        <p className="w-full lg:w-[80%] mx-auto text-left leading-relaxed lg:leading-tight mb-8 lg:mb-14">
          Our full-service planning approach is the epitome of elegance and
          precision, tailored to bring your unique love story to life. Our
          expertise lies not just in meticulous planning and styling for wedding
          celebration but also in crafting unforgettable experiences in any
          destination. From scouting the perfect venue, whether it's in the
          bustling heart of a city or a serene beachfront, to assembling a team
          of the finest creative partners, we manage every intricate detail. Our
          dedicated team meticulously styles each element of your event,
          creating an enchanting ambiance that resonates with sophistication.
        </p>
        <p className="w-full lg:w-[80%] mx-auto text-left leading-relaxed lg:leading-tight">
          With QUÝ PLANNER, experience the pinnacle of luxury in wedding
          planning, both locally and globally, and embark on a journey filled
          with elegance, style, and unforgettable memories. Our commitment is to
          provide an unmatched full-service wedding planning experience, making
          your wedding an elegant, stylish, and unforgettable celebration.
        </p>
      </div>

      {/* Đường kẻ */}
      <div className="w-[100px] lg:w-[548px] h-[1px] bg-primary mx-auto my-12 lg:my-24"></div>

      {/* Hình ảnh sự kiện */}
      <div className="w-full p-20 mb-20">
        <div className="flex flex-col md:flex-row gap-3 md:h-[500px]">
          <div className="item flex flex-col">
            <div className="">
              <img
                src={weddingImg1}
                alt=""
                className="w-full aspect-[241/275]"
              />
              <p className="text-center text-[22px] font-light italic mt-3">
                Day Of Coordination
              </p>
            </div>
          </div>
          <div className="item flex-col flex md:flex-col-reverse">
            <div className="">
              <img
                src={weddingImg2}
                alt=""
                className="w-full aspect-[241/275]"
              />
              <p className="text-center text-[22px] font-light italic mt-3">
                Full-Service Wedding Planning
              </p>
            </div>
          </div>
          <div className="item flex flex-col">
            <div className="">
              <img
                src={weddingImg3}
                alt=""
                className="w-full aspect-[241/275]"
              />
              <p className="text-center text-[22px] font-light italic mt-3">
                Destination Weddings
              </p>
            </div>
          </div>
          <div className="item flex md:flex-col-reverse">
            <div className="">
              <img
                src={weddingImg4}
                alt=""
                className="w-full aspect-[241/275]"
              />
              <p className="text-center text-[22px] font-light italic mt-3">
                Corporate Event Planning
              </p>
            </div>
          </div>
          <div className="item flex flex-col">
            <div className="">
              <img
                src={weddingImg5}
                alt=""
                className="w-full aspect-[241/275]"
              />
              <p className="text-center text-[22px] font-light italic mt-3">
                Custom Event Planning
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
