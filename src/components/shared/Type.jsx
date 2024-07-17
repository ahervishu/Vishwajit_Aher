import React from "react";
import Typewriter from "typewriter-effect";
import "tailwindcss/tailwind.css"; 

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "JavaScript Developer",
          "React JS Developer",
          "Web Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      className="text-yellow-500"
    />
  );
}

export default Type;
