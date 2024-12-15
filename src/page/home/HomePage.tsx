import React from "react";
import aboutUsImg from "../../assets/about-us-logo.png";
import serviceImg from "../../assets/service-logo.png";
import contactImg from "../../assets/contact-logo.png";
import featureWebdingEventsImg from "../../assets/feature-wedding-events.png";
import destinationMagnagermentImg from "../../assets/destination-company.png";
import miceImg from "../../assets/mice.png";
import eventProductImg from "../../assets/event-production.png";
import sustainabilityImg from "../../assets/SUSTAINABILITY.png";
import "../../index.css";

const listService = [
  {
    title: "FEATURED WEDDINGS & SPECIAL EVENTS",
    img: featureWebdingEventsImg,
  },
  {
    title: "DESTINATION MANAGEMENT COMPANY",
    img: destinationMagnagermentImg,
  },
  {
    title: "MICE",
    img: miceImg,
  },
  {
    title: "EVENT DESIGN & PRODUCTION",
    img: eventProductImg,
  },
  {
    title: "SUSTAINABILITY",
    img: sustainabilityImg,
  },
];

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
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 max-w-[300px] md:max-w-[365px]">
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
      <section className="first-section container mx-auto p-14 md:py-28 py-16 overflow-x-scroll">
        <div className="flex flex-row gap-6 lg:w-full w-[1000px]">
          <SectionItem imgSrc={aboutUsImg} number="01" title="ABOUT US" />
          <SectionItem imgSrc={serviceImg} number="02" title="SERVICE" />
          <SectionItem imgSrc={contactImg} number="03" title="CONTACT" />
        </div>
      </section>
      <section className="second-section w-full mx-auto bg-primary lg:py-52 md:py-24 md:p-14 p-5 py-48">
        <div className="mx-auto text-white">
          <p className="text-center font-customRegular md:text-4xl text-lg">
            QUY Planner is as unique and varied as our clients.
          </p>
          <p className="mt-6 lg:w-[60%] w-full mx-auto font-sans font-[290] md:text-2xl text-base text-center">
            With over 10 year’s experience in the luxury hospitality, logistic &
            high-end industry that helps pinpoint our client’s vibe, and
            professional relationships spanning the event world, we will
            collaborate to curate the perfect personalized look and feel for
            your project!
          </p>
        </div>
      </section>
      <section className="third-section w-full lg:p-24 md:p-14 p-8 ">
        <p className="font-customRegular text-2xl mt-10 pb-16 text-center md:hidden block">
          SERVICES
        </p>
        <p className="font-customRegular text-5xl pb-20 text-center md:block hidden">
          SERVICES
        </p>
        <div className="flex flex-col  gap-7 w-full overflow-x-scroll">
          <div className="flex flex-row md:gap-7 gap-3 w-fit">
            {listService.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:w-fit w-[80%]"
              >
                <img
                  src={service.img}
                  alt={service.title.toLowerCase()}
                  className="md:min-w-[362px] min-w-[301px]"
                />
                <span className="text-[18px] md:text-[22px] font-light mt-9 w-[80%] text-center">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="separator h-[1px] bg-primary md:w-[444px] w-[30%] mx-auto"></div>
      <div className="fourth-section pt-24 pb-10 w-full">
        <h1 className="text-center text-5xl font-customRegular mb-8">
          GET IN TOUCH!
        </h1>
        <form className="space-y-6 mt-14 w-[90%] md:w-[60%] mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <input
                className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500"
                type="text"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="flex-1 mt-6 md:mt-0">
              <input
                className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500"
                type="email"
                id="email"
                placeholder="Email address"
              />
            </div>
          </div>
          <div>
            <textarea
              className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500"
              id="message"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gray-700 text-white py-2 px-8 rounded-full focus:outline-none hover:bg-gray-800"
              type="submit"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
