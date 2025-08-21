import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

function ClientTestimonials({ description, name, image, pasion, className }) {
  return (
    <div className={className}>
      <div className="flex space-x-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="h-5 w-5" />
        ))}
      </div>
      <p className="text-sm">{description}</p>
      <hr className="border-gray-200" />
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h1 className="font-medium">{name}</h1>
          <p>{pasion}</p>
        </div>
      </div>
    </div>
  );
}

export default ClientTestimonials;
