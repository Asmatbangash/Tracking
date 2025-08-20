import { assets } from "./assets/assets";
import { Detail, Hero, ProjectCard } from "./components";

function App() {
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
      </div>
    </>
  );
}

export default App;
