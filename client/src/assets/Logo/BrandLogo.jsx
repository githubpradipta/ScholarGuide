import React, { useState } from 'react';

const BrandLogo = ({className,color}) => {
  const [isBlack, setIsBlack] = useState(false);

  return (
    <div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="796pt"
        height="280pt"
        viewBox="0 0 796 280"
        preserveAspectRatio="xMidYMid meet"
        style={{ cursor: 'pointer' }}
      >
        <g
          transform="translate(0.000000,280.000000) scale(0.100000,-0.100000)"
          fill={color} // Change to your original color here
          stroke="none"
        >
          {/* SVG path data goes here */}
        </g>
      </svg>
      <p>Click the logo to toggle color</p>
    </div>
  );
};

export default BrandLogo;
