import React from 'react';

const FacebookIcon = ({className,color}) => (
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
      d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89v-178.89h-65v-74h65v-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5v63h-32.281c-31.801,0 -41.719,19.733 -41.719,39.978v48.022h71l-11.35,74h-59.65v178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
      style={{ fillRule: "nonzero" }}
    />
  </svg>
);

export default FacebookIcon;
