import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function BlogCard({ data }) {
  return (
    <div className="flex justify-center items-center m-4 shadow-2xl rounded-2xl">
      <div className="flex justify-between items-center flex-col md:flex-row">
        <img
          src={data.image}
          loading="lazy"
          className="max-w-sm p-4 rounded-lg"
        />
        <div className="mx-4">
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
