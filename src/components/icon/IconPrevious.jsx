import React from "react";

const IconPrevious = () => {
  return (
    <svg width="15" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 1 3 9l8 8"
        stroke='#1D2026'
        stroke-width="5"
        fill='none'
        fill-rule="evenodd"
        onMouseOver={(e) => e.target.setAttribute("stroke", "hsl(26, 100%, 55%)")}
        onMouseOut={(e) => e.target.setAttribute("stroke", "#1D2026")}
      />
    </svg>
  );
};

export default IconPrevious;
