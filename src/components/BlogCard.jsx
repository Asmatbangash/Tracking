import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function BlogCard({ data }) {
  return (
    <div className="hero m-4 shadow-2xl">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={data.image}
          className="max-w-sm max-md:max-w-full rounded-lg"
        />
        <div>
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <p>{data.shortDesc}</p>
          <p className="py-6">{data.longDesc}</p>
          <Link to={""} className="text-blue-600 flex items-center">
            Continue Reading
            <FaArrowRightLong className="mx-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
