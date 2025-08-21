import React from "react";
import { assets } from "../assets/assets";

function ProjectCard({ item }) {
  return (
    <div className="card bg-base-100 w-90 shadow-sm hover:scale-102">
      <figure>
        <img src={item.image} alt={item.title} className="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
      </div>
    </div>
  );
}

export default ProjectCard;
