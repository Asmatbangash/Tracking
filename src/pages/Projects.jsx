import React from "react";
import { Hero, ProjectCard } from "../components";
import { assets } from "../assets/assets";

function Projects() {
  const projectsData = [
    {
      image: assets.Project1,
      title: "Mobile application/Seentul",
      desc: "A family safety and lifestyle app that integrates live location sharing, SOS alerts, and emergency assistance to keep loved ones connected and secure.",
    },
    {
      image: assets.Project2,
      title: "Mobile application/Grand Corsa",
      desc: "A smart driving companion app offering route tracking, trip history, and vehicle performance insights for a safer and more efficient driving experience.",
    },
    {
      image: assets.Project3,
      title: "Mobile application/World Treasure",
      desc: "A location-based adventure and treasure-hunt application combining gamification, GPS navigation, and interactive challenges for an engaging user journey.",
    },
    {
      image: assets.Project4,
      title: "Mobile application/Luggs",
      desc: "A modern logistics tracking tool for individuals and businesses, enabling asset monitoring, delivery tracking, and real-time GPS insights.",
    },
    {
      image: assets.Project5,
      title: "Mobile application/Yilomi",
      desc: "A personal and enterprise tracking solution designed to monitor movement, assets, and activities with customizable alerts and detailed reports.",
    },
    {
      image: assets.Project6,
      title: "Mobile application/iball",
      desc: "An innovative mobile tracking platform offering real-time GPS monitoring, smart alerts, and data analytics for enhanced security and control.",
    },
    {
      image: assets.Project7,
      title: "Mobile application/Truck Driver",
      desc: "A fleet management app designed for trucking and logistics, featuring route optimization, live tracking, driver performance insights, and safety monitoring.",
    },
    {
      image: assets.Project8,
      title: "Mobile application/Job Site Route",
      desc: "A workforce and job site navigation tool that streamlines employee routes, attendance monitoring, and on-site task management.",
    },
    {
      image: assets.Project9,
      title: "Mobile application/Lurgo",
      desc: "A business-oriented GPS and task management app offering enterprise tracking, smart reporting, and workflow optimization.",
    },
    {
      image: assets.Project10,
      title: "Mobile application/Labor dia",
      desc: "A workforce productivity platform with GPS-based monitoring, attendance tracking, and project management tools tailored for labor-intensive industries.",
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-b from-[#000313] via-[#024c8d] to-[#FFFFFF] flex justify-center items-center flex-col">
        <Hero
          heading={
            <>
              Our <span className="text-[#74c1ff]">Projects</span> <br />
              Have a project in mind? <br /> Let’s get to work.
            </>
          }
        />
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-4 space-y-5 my-8">
        {projectsData.map((item) => (
          <ProjectCard item={item} />
        ))}
      </div>
    </>
  );
}

export default Projects;
