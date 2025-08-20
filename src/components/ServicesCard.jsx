import React from "react";
import { assets } from "../assets/assets";

function ServicesCard() {
  const ourServices = [
    {
      title: "GPS Tracking App",
      desc: "A reliable GPS tracking app that provides real-time location updates, route history, and smart alerts for enhanced security and convenience.",
    },
    {
      title: "Live Location Tracking App",
      desc: "Stay connected with loved ones or teams through live location sharing, ensuring safety, coordination, and timely updates at all times.",
    },
    {
      title: "AI-Powered Tracking Solutions",
      desc: "Harness the power of artificial intelligence to predict movement patterns, optimize routes, and deliver advanced analytics for smarter decision-making.",
    },
    {
      title: "Employee Monitoring App",
      desc: "Track employee activities, productivity, and work hours with a secure monitoring app designed for businesses to improve efficiency and accountability.",
    },
    {
      title: "Fleet Management System",
      desc: "Manage your fleet effortlessly with tools for vehicle tracking, fuel monitoring, route optimization, and maintenance scheduling—all in one platform.",
    },
    {
      title: "Asset Tracking Software",
      desc: "Keep your valuable assets secure and traceable with real-time monitoring, automated alerts, and detailed reporting for complete asset visibility.",
    },
  ];

  return (
    <section className="bg-base-100 py-16 px-6">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ourServices.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4 shadow-sm">
              <img
                src={assets.checkmark}
                alt="service-icon"
                className="w-7 h-7"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesCard;
