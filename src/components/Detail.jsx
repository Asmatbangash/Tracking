import React from "react";
import { assets } from "../assets/assets";

function Detail() {
  const cardData = [
    { counting: "200", name: "Employee" },
    { counting: "500", name: "Projects" },
    { counting: "300", name: "Clients" },
  ];
  return (
    <section className="hero my-10 px-20 max-md:px-0 max-sm:py-4">
      <div className="hero-content flex-col lg:flex-row">
        <div className="">
          <img
            src={assets.CEO}
            alt="CEO Abubakar Siddique"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="text-center px-10 max-sm:px-0 max-sm:my-10 lg:text-left">
          <h1 className="text-3xl font-bold mt-8">CEO Abubakar Siddique</h1>
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
