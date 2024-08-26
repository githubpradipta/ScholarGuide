import React from 'react';

const LinkedinIcon = ({className,color}) => (
  <svg
    className={className}
    height="100%"
    style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
    version="1.1"
    viewBox="0 0 512 512"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path 
    clipRule="evenodd"
    fill={color}
    fillRule="evenodd"
    d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871v-199.921h-66.464v199.921h66.464Zm239.62,0v-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007v-28.306h-66.447c0.881,18.757 0,199.921 0,199.921h66.446v-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204v106.966h66.45Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544h0.429c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z"/>
  </svg>
);

export default LinkedinIcon;
