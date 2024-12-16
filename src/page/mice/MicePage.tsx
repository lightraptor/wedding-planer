import React from "react";
import miceImg from "../../assets/mice1.png";
import miceImg2 from "../../assets/mice2.png";
import miceImg3 from "../../assets/mice3.png";

import leftArrow from "../../assets/leftArrow.png";
import { Link } from "react-router-dom";

export const MicePage = () => {
  return (
    <>
      <div className="flex items-center gap-4 mt-24 w-full">
        <img src={miceImg} alt="" className="w-[calc(50%-8px)] object-cover" />
        <img src={miceImg2} alt="" className="w-[calc(50%-8px)] object-cover" />
      </div>
      <div className="flex flex-row p-24 justify-between">
        <p className="text-5xl font-customRegular w-[60%] leading-normal text-primary tracking-[0.1em]">
          MICE
        </p>
        <Link to="/service">
          <button>
            <img src={leftArrow} alt="" className="w-20 h-20" />
          </button>
        </Link>
      </div>
      <div className="ml-24 mb-24">
        <div className="flex flex-row gap-8">
          <div className=" w-[calc(50%-16px)] text-primary py-20">
            <h1 className="text-3xl font-customRegular font-bold w-4/5 mb-14">
              BUSINESS MEETING CONFERENCE
            </h1>
            <p className="mb-4 font-sans text-[26px] font-light leading-snug">
              Whether your business meeting and conference goal is to move
              markets or move minds, we’ll weave together the right set of
              conference solutions — always meaningful, on time and right on
              budget.
            </p>
            <p className="mb-4 font-sans text-[26px] font-light leading-snug">
              Expect a partner who will stay strides ahead, while following your
              grand vision and delivering every detail. Our biggest superpower?
              Our thoroughness. There isn’t a question we don’t ask, no point we
              haven’t considered. We’re there to help you navigate every
              destination, every inch of the way.
            </p>
            <ul className="list-disc pl-5 font-medium text-2xl">
              <li className="mb-5">
                <span className="">Conferences</span>
              </li>
              <li className="mb-5">
                <span className="">Association Meetings</span>
              </li>
              <li className="mb-5">
                <span className="">Corporate Events</span>
              </li>
              <li className="mb-5">
                <span className="">Product Launches</span>
              </li>
              <li className="mb-5">
                <span className="">Sales Meetings / SKOs</span>
              </li>
              <li className="mb-5">
                <span className="">User Conferences</span>
              </li>
              <li className="mb-5">
                <span className="">Investigator Meetings</span>
              </li>
            </ul>
          </div>
          <div className="w-[calc(50%-16px)]">
            <img src={miceImg3} alt="" className="w-full object-cover" />
          </div>
        </div>
      </div>
      <div className="mx-24 mb-24 flex flex-row gap-4 items-center">
        <div className="flex flex-col space-y-4 w-1/2">
          <button className="border border-gray-400 rounded-3xl p-8 tracking-[0.1em] text-primary font-medium font-sans text-3xl">
            Program Ideation & Itinerary
          </button>
          <button className="border border-gray-400 rounded-3xl p-8 tracking-[0.1em] text-primary font-medium font-sans text-3xl">
            Local Experiences, Activities
          </button>
          <button className="border border-gray-400 rounded-3xl p-8 tracking-[0.1em] text-primary font-medium font-sans text-3xl">
            Off-site Dining & Events
          </button>
          <button className="border border-gray-400 rounded-3xl p-8 tracking-[0.1em] text-primary font-medium font-sans text-3xl">
            Transportation & Logistics
          </button>
          <button className="border border-gray-400 rounded-3xl p-8 tracking-[0.1em] text-primary font-medium font-sans text-3xl">
            Décor & Entertainment
          </button>
          <button className="border border-gray-400 rounded-3xl p-8 tracking-[0.1em] text-primary font-medium font-sans text-3xl">
            On-site Management & Staff
          </button>
          <button className="border border-gray-400 rounded-3xl p-8 tracking-[0.1em] text-primary font-medium font-sans text-3xl">
            Event Success Evaluation
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 w-1/2">
          <h1 className="text-3xl font-customRegular tracking-widest mb-10">
            INCENTIVE PROGRAM
          </h1>
          <p className="mt-4 text-[26px] font-sans font-light">
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
