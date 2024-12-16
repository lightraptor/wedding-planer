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
      <img src={imgFeature} alt="" className="mt-24" />
      <div className="flex flex-row p-24 justify-between">
        <p className="text-5xl font-customRegular w-[60%] leading-normal text-primary tracking-[0.1em]">
          FEATURED WEDDINGS & SPECIAL EVENTS
        </p>
        <Link to="/service">
          <button>
            <img src={leftArrow} alt="" className="w-20 h-20" />
          </button>
        </Link>
      </div>
      <img src={imgFeature2} alt="" className="w-full" />
      <div className="container p-20 font-light text-primary font-san text-[26px] mx-auto">
        <p className="w-[80%] mx-auto text-left leading-tight mb-14">
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
        <p className="w-[80%] mx-auto text-left leading-tight">
          With QUÝ PLANNER, experience the pinnacle of luxury in wedding
          planning, both locally and globally, and embark on a journey filled
          with elegance, style, and unforgettable memories. Our commitment is to
          provide an unmatched full-service wedding planning experience, making
          your wedding an elegant, stylish, and unforgettable celebration.
        </p>
      </div>
      <div className="w-[548px] h-[1px] bg-primary mx-auto text-center my-24"></div>
      <div className="w-full p-20 mb-20">
        <div className="flex flex-row gap-3 h-[500px]">
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
          <div className="item flex flex-col-reverse">
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
          <div className="item flex flex-col-reverse">
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
