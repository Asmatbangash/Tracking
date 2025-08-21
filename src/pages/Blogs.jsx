import React from "react";
import { Hero } from "../components";

function Blogs() {
  return (
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
  );
}

export default Blogs;
