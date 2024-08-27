import React from 'react';

const LocationIcon = ({color}) => (
  <svg
    enableBackground="new 0 0 12 12"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M6,0C3.2385864,0,1,2.2385864,1,5s2.5,5,5,7c2.5-2,5-4.2385864,5-7S8.7614136,0,6,0z M6,7  C4.8954468,7,4,6.1045532,4,5s0.8954468-2,2-2s2,0.8954468,2,2S7.1045532,7,6,7z"
      fill={color}
    />
  </svg>
);

export default LocationIcon;
