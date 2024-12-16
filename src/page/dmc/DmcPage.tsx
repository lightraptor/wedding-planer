import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/leftArrow.png";
import dmcImg from "../../assets/dmcImg.png";
import dmcImg1 from "../../assets/dmcImg1.png";
import dmcImg2 from "../../assets/dmcImg2.png";
import dmcImg3 from "../../assets/dmclmg3.png";

export const DmcPage = () => {
  return (
    <>
      <img src={dmcImg} alt="" className="mt-24 px-40" />
      <div className="flex flex-row p-24 justify-between">
        <p className="text-5xl font-customRegular w-[70%] leading-normal text-primary tracking-[0.1em]">
          DESTINATION MANAGEMENT COMPANY
        </p>
        <Link to="/service">
          <button>
            <img src={leftArrow} alt="" className="w-20 h-20" />
          </button>
        </Link>
      </div>
      <div className="p-20 bg-primary text-white text-2xl font-customRegular">
        <p className="w-[50%] mx-auto text-center">
          With us, you can always expect safety, comfort and a friendly welcome.
        </p>
      </div>
      <div className="flex md:flex-row items-center p-20 w-[90%] mx-auto gap-10">
        <img
          alt="A group of people having a conversation in a cozy room with a wine cabinet in the background"
          className="w-full md:w-[45%] rounded-lg"
          src={dmcImg1}
        />
        <div className="mt-6 md:mt-0 md:ml-6  text-center md:text-left text-primary">
          <h2 className="text-3xl font-customRegular mb-6">ACCOMODATION</h2>
          <p className="mb-6 font-sans font-light text-[26px] leading-snug">
            Booking accommodation for your customers can feel like a gamble. It
            doesn't have to be. All our DMC accommodation options are
            hand-picked by travel experts who have worked in the local region
            for years. With us, you can always expect safety, comfort and a
            friendly welcome.
          </p>
          <div className="flex flex-col space-y-4">
            <button className="px-6 py-3 border border-gray-400 font-bold rounded-full hover:bg-gray-100 w-3/5 text-[20px]">
              LUXURY ACCOMODATION
            </button>
            <button className="px-6 py-3 border border-gray-400 font-bold rounded-full hover:bg-gray-100 w-3/5 text-[20px]">
              BUDGET HOTEL
            </button>
          </div>
        </div>
      </div>
      <div className=" p-24 grid grid-cols-1 md:grid-cols-2 gap-8 text-primary">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-customRegular mb-6">
            AIRPORT MEET-AND-GREET & TRANSPORTATION SERVICES
          </h2>
          <p className="font-sans font-light text-[26px] leading-snug">
            First impressions count. So do last impressions. From manifest
            coordination to curbside management, we’re here arrival to
            departure.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={dmcImg2}
            alt="A person holding an umbrella and opening a car door for a passenger"
            className="w-full"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={dmcImg3}
            alt="A group of people walking on the beach"
            className="w-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-customRegular mb-6">
            CUSTOM GROUP TOURS
          </h2>
          <p className="font-sans font-light text-[26px] leading-snug">
            North – Hanoi, Central – Danang or South Region – HCMC and more - if
            you're looking to build a completely custom tour experience, we have
            no shortage of incredible locations.
          </p>
        </div>
      </div>
    </>
  );
};
