import React from "react";
import { assets } from "../assets/assets";

function Detail() {
  const cardData = [
    { counting: "200", name: "Employee" },
    { counting: "500", name: "Projects" },
    { counting: "300", name: "Clients" },
  ];
  return (
    <section className="hero my-10 px-20 max-sm:px-0 max-sm:py-10">
      <div className="hero-content flex-col lg:flex-row gap-10">
        {/* Rhombus Wrapper */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Rhombus background */}
          <div className="absolute w-full h-full bg-gradient-to-tr from-blue-200 to-blue-200 rotate-45  rounded-lg"></div>

          <div className="relative w-80 flex flex-col items-center">
            <div className="w-60  overflow-hidden rotate-45 relative z-10 ">
              <img
                src={assets.CEO}
                alt="CEO Abubakar Siddique"
                className="-rotate-45 w-full h-full object-cover"
              />
            </div>

            {/* Blue line under image */}
            <div className="w-80 h-10 bg-blue-500 -rotate-10"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center px-20 max-sm:px-0 max-sm:my-10 lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mt-8">
            CEO Abubakar Siddique
          </h1>
          <h3>Founder & Lead Developer | Tracking Systems Developer</h3>
          <p className="py-4 text-base leading-relaxed">
            Pioneering advanced tracking solutions including family safety apps,
            real-time vehicle monitoring systems, and enterprise GPS platforms.
            We transform location data into actionable insights through
            intuitive mobile applications and robust cloud-based services.
          </p>
          <div className="flex justify-around w-full py-6">
            {cardData.map((item) => (
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl font-light tracking-tight text-black">
                  +{item.counting}
                </span>
                <div className="bg-blue-500 w-20 h-3 rounded-full my-2"></div>
                <h1 className="text-lg font-medium">{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
