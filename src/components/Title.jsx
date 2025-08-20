import React from "react";

function Title({ title, desc, className = "" }) {
  return (
    <div className="max-w-6xl mx-auto text-center mt-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {title}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">{desc}</p>
    </div>
  );
}

export default Title;
