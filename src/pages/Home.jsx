import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import {
  Button,
  ClientTestimonials,
  Detail,
  Hero,
  ProjectCard,
  ServicesCard,
  Title,
} from "../components";
import { useRef } from "react";

function Home() {
  const team = [
    { image: assets.Qasim, name: "Muhammad Qasim", pasion: "iOS Developer" },
    { image: assets.Zarish, name: "Zarish", pasion: "Project Manager" },
    {
      image: assets.Fareed,
      name: "Fareed",
      pasion: "ASO (App Store Optimization) Expert",
    },
  ];

  const reviewCard = [
    {
      desc: "Developed ZipFixers, an on-demand home service app connecting users with nearby repair professionals in real-time. The platform features live provider tracking, adjustable search radii (2-20 miles), instant professional profiles with ratings/specialties, and direct contact options. Built for urgent home repairs, it eliminates research time with immediate solutions.",
      name: "Joen",
      pasion: "Designer, New York",
      image: assets.clientImg,
      classes:
        "bg-[#1079d3] text-white rounded-2xl shadow-lg p-6 space-y-4 transition transform hover:scale-105 w-full md:w-80",
    },
    {
      desc: "Developed Taskou, Algeria’s premier on-demand service app connecting users with vetted professionals for home repairs, beauty services, and more. The platform features real-time tracking, multi-category support, and verified reviews—streamlining trust and convenience. Built to elevate local service standards, Taskou delivers instant access to skilled help with complete transparency. A game-changer for hassle-free task solutions.A streamlined, user-friendly interface ensures quick fixes when customers need them most.",
      name: "prety",
      pasion: "Designer, New York",
      image: assets.clientImg,
      classes:
        "bg-[#1079d3] text-white rounded-2xl shadow-lg p-6 space-y-6 transition transform hover:scale-105 w-full md:w-80",
    },
    {
      desc: "Developed Taskou, Algeria’s premier on-demand service app connecting users with vetted professionals for home repairs, beauty services, and more. The platform features real-time tracking, multi-category support, and verified reviews—streamlining trust and convenience. Built to elevate local service standards, Taskou delivers instant access to skilled help with complete transparency. A game-changer for hassle-free task solutions",
      name: "warner",
      pasion: "Designer, New York",
      image: assets.clientImg,
      classes:
        "bg-[#1079d3] text-white rounded-2xl shadow-lg p-6 space-y-4 transition transform hover:scale-105 w-full md:w-80",
    },
  ];

  const projectsData = [
    {
      image: assets.Seentul,
      title: "Mobile application/Seentul",
      desc: "A family safety and lifestyle app that integrates live location sharing, SOS alerts, and emergency assistance to keep loved ones connected and secure.",
    },
    {
      image: assets.Lurgo,
      title: "Mobile application/Lurgo",
      desc: "A business-oriented GPS and task management app offering enterprise tracking, smart reporting, and workflow optimization.",
    },
    {
      image: assets.JobSiteRoute,
      title: "Mobile application/Job Site Route",
      desc: "A workforce and job site navigation tool that streamlines employee routes, attendance monitoring, and on-site task management.",
    },
    {
      image: assets.WorldTreasure,
      title: "Mobile application/World Treasure",
      desc: "A location-based adventure and treasure-hunt application combining gamification, GPS navigation, and interactive challenges for an engaging user journey.",
    },
    {
      image: assets.iball,
      title: "Mobile application/iball",
      desc: "An innovative mobile tracking platform offering real-time GPS monitoring, smart alerts, and data analytics for enhanced security and control.",
    },
    {
      image: assets.TruckDriver,
      title: "Mobile application/Truck Driver",
      desc: "A fleet management app designed for trucking and logistics, featuring route optimization, live tracking, driver performance insights, and safety monitoring.",
    },
  ];

  const myTeam = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="bg-img flex justify-center items-center flex-col text-center px-4 relative">
        <Hero
          onMyTeamClick={() => scrollToSection(myTeam)}
          heading={
            <>
              <span className="text-[#74c1ff]">GPS </span>
              Tracking & Live Location <br className="hidden md:block" />
              Monitoring Anywhere, Anytime!
            </>
          }
          paragraph={
            "Track vehicles, employees, assets & more in real-time with 99% accuracy"
          }
        />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923319882782"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center"
        >
          <Button
            className="btn bg-[#1C7DD5] text-white my-6 py-2 px-6 rounded-md text-sm sm:text-base md:text-lg"
            text={
              <>
                Contact Us
                <img src={assets.sent} alt="sent" className="w-4 h-4 ml-2" />
              </>
            }
          />
        </a>

        {/* Location Arrow Image */}
        <img
          src={assets.locationArrow}
          alt="location Arrow"
          className="absolute w-10 h-10 md:w-12 md:h-12 right-6 md:right-20 lg:right-60 top-60 md:top-72 lg:top-80"
        />
        <img
          src={assets.frame}
          alt="frame"
          className="w-full object-cover relative top-20"
        />
      </div>

      <Detail />
      <div className="">
        <div className="px-10 max-md:px-4 max-sm:px-2">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl">Tracking Apps</h1>
            <Link to="/projects">
              <button className="btn btn-info">SEE All</button>
            </Link>
          </div>
          <p>
            Our business proposal introduces a comprehensive family tracking app
            designed to address the modern challenges of family safety and
            communication. Leveraging cutting-edge GPS technology.
          </p>
        </div>
        {/* Project section */}
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 mx-10 max-sm:mx-0">
          {projectsData.map((item) => (
            <ProjectCard item={item} />
          ))}
        </div>
        <div className="flex justify-center items-center flex-col text-center">
          <Title
            title={"Best Business proposal Opportunity"}
            desc={
              " Our business proposal introduces a comprehensive family tracking app            designed to address the modern  challenges of family safetyand communication. Leveraging cutting-edge GPS technology."
            }
          />
          <img
            src={assets.MapsicleMap}
            alt="map"
            className="w-full py-5 px-20 max-sm:px-5"
          />
        </div>
        {/* Services Section */}
        <div className="text-center">
          <Title
            title={"Our Services"}
            desc={
              " Explore our wide range of advanced tracking and monitoring solutions designed to keep your business, assets, and loved ones safe."
            }
          />
          <ServicesCard />
          <Button
            text={"Load More"}
            className="btn text-white py-2 px-4 bg-[#2196F3]"
          />
        </div>
        {/* Mobile Frame Section */}
        <div className="flex justify-center items-center flex-col my-8">
          <Title
            title={"Family locator App"}
            desc={
              "With the advanced features of our app, parents can be more focused and satisfied, and family members can feel safe and protected"
            }
          />
          <div className="bgMobileFrame flex justify-center items-center">
            <img
              src={assets.mobileFrame}
              alt="mobileFrame"
              className="w-100 h-100 my-10"
            />
          </div>
        </div>
        {/* Team section */}
        <div id="myTeam">
          <Title
            title={"Our Team of Experts"}
            desc={
              "Our business proposal introduces a comprehensive family tracking app designed to address the modern challenges of family safety and communication. Leveraging cutting-edge GPS technology."
            }
          />
          <div className="flex justify-center items-center space-x-12 my-8">
            {team.map((member) => (
              <div className="flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-50 h-50"
                />
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-lg text-[#2196F3] leading-relaxed">
                  {member.pasion}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-img py-10 flex justify-center items-center flex-col text-white">
          <h1 className="text-3xl font-bold my-4">Client Testimonials</h1>
          <p className="text-white text-center max-w-2xl mx-auto">
            Our business proposal introduces a comprehensive family tracking app
            designed to address the modern challenges of family safety and
            communication. Leveraging cutting-edge GPS technology.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-10 ">
            {reviewCard.map((data) => (
              <ClientTestimonials
                description={data.desc}
                name={data.name}
                pasion={data.pasion}
                image={data.image}
                className={data.classes}
              />
            ))}
          </div>
        </div>
        <div className="mx-auto my-10 max-w-5xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between bg-[#1079d3] text-white rounded-2xl shadow-lg p-6 md:p-4 space-y-2 md:space-y-0 md:space-x-6">
            {/* Icon */}
            <img
              src={assets.whatsapp}
              alt="whatsapp"
              className="h-14 w-14 object-cover"
            />

            {/* Text */}
            <div className="text-center md:text-left flex-1">
              <h1 className="text-xl md:text-2xl font-semibold">
                Ready to get started?
              </h1>
              <p className="mt-2 text-sm md:text-base text-white/90">
                Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
              </p>
            </div>

            {/* Button */}
            <Button
              className="btn bg-white text-[#1C7DD5] py-2 px-6"
              text={
                <>
                  Write To Us
                  <img src={assets.sentBlue} alt="sent" className="w-4 h-4" />
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
