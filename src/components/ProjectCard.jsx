import React from "react";
import { assets } from "../assets/assets";

function ProjectCard({ item }) {
  return (
    <div className="card bg-base-100 w-full shadow-lg hover:scale-105 transition-transform">
      <figure>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
