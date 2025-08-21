import { Outlet } from "react-router-dom";
import { Footer, Hero } from "./components";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
