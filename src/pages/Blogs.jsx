import React from "react";
import { BlogCard, Hero } from "../components";
import { assets } from "../assets/assets";

function Blogs() {
  const blogData = [
    {
      image: assets.Seentul,
      title: "Live GPS Tracking: ",
      shortDesc: "The Ultimate Guide for Businesses",
      longDesc:
        "Pioneering advanced tracking solutions including family safety apps, real-time vehicle monitoring systems, and enterprise GPS platforms. Learn how live GPS tracking can improve security, efficiency, and customer satisfaction for businesses of all sizes.",
    },
    {
      image: assets.Luggs,
      title: "Best Vehicle Tracking Systems of 2024 – Expert Reviewed",
      shortDesc: "Top-rated vehicle tracking systems reviewed for 2024.",
      longDesc:
        "Choosing the right tracking solution can boost productivity and cut costs. In this expert-reviewed guide, we analyze the best vehicle tracking systems of 2024, comparing features, performance, and pricing to help businesses make smarter decisions.",
    },
    {
      image: assets.iball,
      title: "How GPS Fleet Tracking Saves Companies 30% on Fuel",
      shortDesc: "Cut fuel costs with smart GPS fleet tracking.",
      longDesc:
        "Fuel is one of the biggest expenses for fleet-based businesses. Learn how GPS fleet tracking helps reduce fuel consumption by optimizing routes, monitoring driver behavior, and improving overall operational efficiency—saving companies up to 30%.",
    },
    {
      image: assets.GrandCorsa,
      title: "Employee Monitoring Made Easy: Ethical GPS Tracking",
      shortDesc: "Balance productivity and privacy with GPS tracking.",
      longDesc:
        "Employee monitoring doesn’t have to feel invasive. Discover how ethical GPS tracking empowers businesses to increase accountability and performance while respecting employee privacy, creating a healthier and more transparent workplace environment.",
    },
    {
      image: assets.Lurgo,
      title: "Stop Theft Now! GPS Asset Tracking for High-Value Goods",
      shortDesc: "Protect valuable assets with GPS tracking technology.",
      longDesc:
        "Theft of high-value goods can result in massive losses. GPS asset tracking provides businesses with real-time visibility, instant alerts, and recovery tools to secure shipments, reduce risks, and safeguard valuable assets against theft or misuse.",
    },
    {
      image: assets.Luggs,
      title: "Real-Time vs. Passive Tracking: Which One Do You Need?",
      shortDesc: "Understand the difference between tracking types.",
      longDesc:
        "Not all GPS tracking systems are the same. This article breaks down the differences between real-time and passive tracking, explaining their benefits, limitations, and ideal use cases so you can choose the right solution for your business needs.",
    },
    {
      image: assets.Yilomi,
      title: "5 Signs Your Business Needs a GPS Tracking Solution",
      shortDesc: "Is it time to invest in GPS tracking for your company?",
      longDesc:
        "Many businesses delay adopting GPS solutions until it’s too late. Here are five warning signs—from rising fuel costs to delivery inefficiencies—that indicate your business could benefit from a GPS tracking system right now.",
    },
    {
      image: assets.JobSiteRoute,
      title: "The Future of Tracking: AI-Powered GPS Technology",
      shortDesc: "AI is transforming the next generation of GPS systems.",
      longDesc:
        "Artificial intelligence is revolutionizing GPS tracking by enabling predictive analytics, smarter routing, and proactive alerts. Explore how AI-powered GPS solutions are shaping the future of logistics, security, and everyday location-based services.",
    },
    {
      image: assets.TruckDriver,
      title: "How to Track Delivery Drivers & Improve Customer Service",
      shortDesc: "Boost delivery efficiency and customer trust with GPS.",
      longDesc:
        "Customer satisfaction depends on timely and transparent deliveries. Learn how GPS driver tracking helps businesses monitor routes, reduce delays, and provide customers with real-time updates, ultimately improving service quality and trust.",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-[#000313] via-[#49adff] to-[#FFFFFF] flex justify-center items-center flex-col">
        <Hero
          heading={
            <>
              Our <span className="text-[#168beb]"> Blogs</span> <br />
              Have a project in mind? <br /> Let’s get to work.
            </>
          }
        />
      </div>
      <div className="flex justify-center items-center flex-col">
        {blogData.map((data) => (
          <BlogCard data={data} />
        ))}
      </div>
    </>
  );
}

export default Blogs;
