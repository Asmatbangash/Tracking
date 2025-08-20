import { assets } from "./assets/assets";
import { Detail, Hero } from "./components";

function App() {
  return (
    <>
      <div className="bg-[#003560dd] bg-img flex justify-center items-center flex-col">
        <Hero />
        <div className="">
          <img src={assets.frame} alt="frame" className="" />
        </div>
        {/* <div className="absolute top-103 left-90">
        <img src={assets.MapsicleMap} alt="MapsicleMap" className="h-60" />
      </div>
      <div className="absolute top-90 right-100">
        <img src={assets.Orderdetails} alt="Orderdetails" className="h-80" />
      </div>
      <div className="absolute top-130 left-70">
        <img src={assets.CardShipment} alt="CardShipment" className="h-40" />
      </div>
      <div className="absolute top-95 left-90">
        <img src={assets.map} alt="map" className="h-40" />
      </div>
      <div className="absolute top-100 right-60">
        <img src={assets.Screen9} alt="Screen9" className="h-60" />
      </div> */}
      </div>
      <Detail />
    </>
  );
}

export default App;
