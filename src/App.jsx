import { assets } from "./assets/assets";
import {
  Button,
  Detail,
  Hero,
  Location,
  ProjectCard,
  ServicesCard,
  Title,
} from "./components";

function App() {
  const team = [
    { image: assets.Qasim, name: "Muhammad Qasim", pasion: "iOS Developer" },
    { image: assets.Zarish, name: "Zarish", pasion: "Project Manager" },
    {
      image: assets.Fareed,
      name: "Fareed",
      pasion: "ASO (App Store Optimization) Expert",
    },
  ];
  return (
    <>
      <div className="bg-[#003560dd] bg-img flex justify-center items-center flex-col">
        <Hero />
        <div className="">
          <img src={assets.frame} alt="frame" className="" />
        </div>
      </div>
      <Detail />
      <div className="">
        <div className="px-20 max-sm:px-2">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl">Tracking Apps</h1>
            <button className="btn btn-info">SEE All</button>
          </div>
          <p>
            Our business proposal introduces a comprehensive family tracking app
            designed to address the modern challenges of family safety and
            communication. Leveraging cutting-edge GPS technology.
          </p>
        </div>
        <ProjectCard />
        <div className="flex justify-center items-center flex-col text-center">
          <Title
            title={"Best Business proposal Opportunity"}
            desc={
              " Our business proposal introduces a comprehensive family tracking app            designed to address the modern  challenges of family safetyand communication. Leveraging cutting-edge GPS technology."
            }
          />
          <Location />
        </div>
        <div className="text-center">
          <Title
            title={"Our Services"}
            desc={
              " Explore our wide range of advanced tracking and monitoring solutions designed to keep your business, assets, and loved ones safe."
            }
          />
          <ServicesCard />
          <Button text={"Load More..."} className="btn btn-info" />
        </div>
        <div className="flex justify-center items-center flex-col">
          <Title
            title={"Family locator App"}
            desc={
              "With the advanced features of our app, parents can be more focused and satisfied, and family members can feel safe and protected"
            }
          />
          <img src={assets.mobileFrame} alt="mobileFrame" className="" />
        </div>
        <div>
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
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-300 leading-relaxed">
                  {member.pasion}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#003560dd] bg-img flex justify-center items-center flex-col text-white">
          <h1 className="text-3xl font-bold mb-">Client Testimonials</h1>
          <p className="text-white text-center max-w-2xl mx-auto">
            Our business proposal introduces a comprehensive family tracking app
            designed to address the modern challenges of family safety and
            communication. Leveraging cutting-edge GPS technology.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
