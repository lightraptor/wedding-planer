import React from "react";
import miceImg from "../../assets/mice1.png";
import miceImg2 from "../../assets/mice2.png";
import miceImg3 from "../../assets/mice3.png";

import leftArrow from "../../assets/leftArrow.png";
import { Link } from "react-router-dom";

export const MicePage = () => {
  return (
    <>
      {/* Hình ảnh đầu trang */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-24 w-full px-6">
        <img
          src={miceImg}
          alt=""
          className="w-full sm:w-[calc(50%-8px)] object-cover rounded-lg"
        />
        <img
          src={miceImg2}
          alt=""
          className="w-full sm:w-[calc(50%-8px)] object-cover rounded-lg"
        />
      </div>

      {/* Tiêu đề và nút quay lại */}
      <div className="flex flex-col sm:flex-row p-6 sm:p-24 justify-between items-center">
        <p className="text-3xl sm:text-5xl font-customRegular w-full sm:w-[60%] leading-normal text-primary tracking-[0.1em] text-center sm:text-left">
          MICE
        </p>
        <Link to="/service" className="mt-4 sm:mt-0">
          <button>
            <img src={leftArrow} alt="" className="w-16 h-16 sm:w-20 sm:h-20" />
          </button>
        </Link>
      </div>

      {/* Nội dung chính */}
      <div className="px-6 sm:ml-24 sm:mb-24">
        <div className="flex flex-col-reverse sm:flex-row gap-8">
          <div className="w-full sm:w-[50%] text-primary py-10 sm:py-20">
            <h1 className="text-2xl sm:text-3xl font-customRegular font-bold w-full sm:w-4/5 mb-6 sm:mb-14">
              BUSINESS MEETING CONFERENCE
            </h1>
            <p className="mb-4 font-sans text-base sm:text-[26px] font-light leading-snug">
              Whether your business meeting and conference goal is to move
              markets or move minds, we’ll weave together the right set of
              conference solutions — always meaningful, on time and right on
              budget.
            </p>
            <p className="mb-4 font-sans text-base sm:text-[26px] font-light leading-snug">
              Expect a partner who will stay strides ahead, while following your
              grand vision and delivering every detail. Our biggest superpower?
              Our thoroughness. There isn’t a question we don’t ask, no point we
              haven’t considered. We’re there to help you navigate every
              destination, every inch of the way.
            </p>
            <ul className="list-disc pl-5 font-medium text-base sm:text-2xl">
              <li className="mb-3 sm:mb-5">Conferences</li>
              <li className="mb-3 sm:mb-5">Association Meetings</li>
              <li className="mb-3 sm:mb-5">Corporate Events</li>
              <li className="mb-3 sm:mb-5">Product Launches</li>
              <li className="mb-3 sm:mb-5">Sales Meetings / SKOs</li>
              <li className="mb-3 sm:mb-5">User Conferences</li>
              <li className="mb-3 sm:mb-5">Investigator Meetings</li>
            </ul>
          </div>
          <div className="w-full sm:w-[50%]">
            <img
              src={miceImg3}
              alt=""
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Các nút và nội dung bổ sung */}
      <div className="px-6 sm:mx-24 sm:mb-24 flex flex-col-reverse sm:flex-row gap-8 items-center">
        <div className="flex flex-col space-y-4 w-full sm:w-1/2 md:mb-0 mb-10">
          {[
            "Program Ideation & Itinerary",
            "Local Experiences, Activities",
            "Off-site Dining & Events",
            "Transportation & Logistics",
            "Décor & Entertainment",
            "On-site Management & Staff",
            "Event Success Evaluation",
          ].map((text, index) => (
            <button
              key={index}
              className="border border-gray-400 rounded-3xl p-4 sm:p-8 tracking-[0.1em] text-primary font-medium font-sans text-sm sm:text-3xl"
            >
              {text}
            </button>
          ))}
        </div>
        <div className="w-full sm:w-1/2 text-center sm:text-left ">
          <h1 className="text-2xl sm:text-3xl font-customRegular tracking-widest mb-6 sm:mb-10">
            INCENTIVE PROGRAM
          </h1>
          <p className="text-base sm:text-[26px] font-sans font-light">
            We understand the heightened visibility around these programs, and
            that at the heart of it all, it’s about catapulting results and
            motivating people. We inspire attendees with out-of-this-world
            destination experiences they would never dream of. We’ll obsess over
            the details that make the difference. Most importantly, our
            incentive programs will continue to drive peak performance long
            after attendees have unpacked.
          </p>
        </div>
      </div>
    </>
  );
};
