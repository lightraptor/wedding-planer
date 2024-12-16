import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/leftArrow.png";
import eventDesImg1 from "../../assets/musicial-music-live-band-performing-stage-with-different-lights-with-crowd-people-fans 1.png";
import eventDesImg from "../../assets/event-des-1.png";

export const EventDesPage = () => {
  const services = [
    {
      title: "Full-service Event Design",
      description:
        "From fireworks to fire permits, florals to fondue, we’ll handle the full spectrum.",
    },
    {
      title: "Venue Selection",
      description:
        "Square footage. Tech capabilities. Wow factor. It all matters, and we know the best fits on all fronts.",
    },
    {
      title: "Concept & theme development",
      description:
        "By thoroughly understanding the who, what, why, and when, we’ll design events that go from standard to standout.",
    },
    {
      title: "Décor",
      description:
        "Every detail counts when setting the scene and creating the right atmosphere.",
    },
    {
      title: "Entertainment",
      description:
        "From steel drum bands, to illusionists, to interactive stations, keep guests enthralled and involved.",
    },
    {
      title: "Production",
      description:
        "Executing the minutiae and crafting all the major moments, those are some of our hallmarks.",
    },
    {
      title: "Audio visual",
      description:
        "Be seen, be heard, be felt. We’ll pull together seamless AV solutions for it all.",
    },
    {
      title: "Lighting",
      description:
        "Uplights. Backdrops. Pinspots. Let us illuminate your event’s visual appeal.",
    },
    {
      title: "Catering",
      description:
        "What’s behind every bite: Menu planning. Food and beverage service. Creative presentation.",
    },
    {
      title: "Event production management",
      description:
        "Staging, lighting, camera crews, oh my! Sometimes (okay, most of the time) you need a ringleader to manage all your vendors.",
    },
    {
      title: "Logistics and on-site event coordination",
      description:
        "Our people making it happen for your people, from loading busses, to registration, to directing the crowd.",
    },
  ];
  return (
    <>
      <img src={eventDesImg1} alt="" className="mt-24 px-40" />
      <div className="flex flex-row p-24 justify-between">
        <p className="text-5xl font-customRegular w-[60%] leading-normal text-primary tracking-[0.1em]">
          EVENT DESIGN & PRODUCTION
        </p>
        <Link to="/service">
          <button>
            <img src={leftArrow} alt="" className="w-20 h-20" />
          </button>
        </Link>
      </div>
      <img src={eventDesImg} alt="" className="w-full" />
      <div className="container mx-auto p-16 my-24 text-primary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {services.slice(0, 10).map((service, index) => (
            <div>
              <div
                key={index}
                className="border rounded-3xl border-primary p-8 text-center"
              >
                <h2 className="font-medium text-3xl font-sans">
                  {service.title}
                </h2>
              </div>
              <p className="font-sans font-light text-2xl text-center my-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className=" w-[60%] mx-auto">
          <div className="border rounded-3xl border-primary p-8 text-center">
            <h2 className="font-medium text-3xl font-sans">
              {services[10].title}
            </h2>
          </div>
          <p className="font-sans font-light text-2xl text-center my-6">
            {services[10].description}
          </p>
        </div>
      </div>
    </>
  );
};
