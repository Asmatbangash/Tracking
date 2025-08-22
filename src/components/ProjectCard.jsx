import React from "react";
import { assets } from "../assets/assets";

function ProjectCard({ item }) {
  return (
    <div className="card bg-base-100 max-md:m-2 w-90 max-md:w-full shadow-lg hover:scale-102">
      <figure>
        <img src={item.image} alt={item.title} className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
      </div>
    </div>
  );
}

export default ProjectCard;
