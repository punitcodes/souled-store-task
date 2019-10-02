import React from "react";

const LineHeading = ({ title }) => {
  return (
    <div className="text-center font-medium tracking-wider border-dashed border-b-2 border-gray-500 leading-vtight my-8">
      <span className="text-gray-500 text-xl px-6 bg-white">
        {title.toUpperCase()}
      </span>
    </div>
  );
};

export default LineHeading;
