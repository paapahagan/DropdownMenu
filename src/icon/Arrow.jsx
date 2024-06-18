import React from "react";

function Arrow() {
  return (
    <div className=" cursor-pointer ">
      <svg
        className="h-8 w-8 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <circle
          cx="12"
          cy="12"
          r="10"
        /> <polyline points="8 12 12 16 16 12" />{" "}
        <line x1="12" y1="8" x2="12" y2="16" />
      </svg>
    </div>
  );
}

export default Arrow;
