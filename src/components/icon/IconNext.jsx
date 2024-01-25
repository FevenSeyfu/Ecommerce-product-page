import React from "react";

const IconNext = () => {
  return (
    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m2 1 8 8-8 8"
        stroke='#1D2026'
        stroke-width="5"
        fill="none"
        fill-rule="evenodd"
        onMouseOver={(e) => e.target.setAttribute("stroke", "hsl(26, 100%, 55%)")}
        onMouseOut={(e) => e.target.setAttribute("stroke", "#1D2026")}
      />
    </svg>
  );
};

export default IconNext;
