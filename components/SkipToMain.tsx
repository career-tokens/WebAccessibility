import Link from "next/link";
import React from "react";

const SkipToMain = () => {
  return (
    <Link
      href="#topic" //the element with id="topic" is in "./ui/typewriter-effect.tsx" but
      //still it will be called and rendered for the home page
      className="skip absolute z-[100] w-fit rounded-full mx-auto left-0 right-0 top-[-100px] focus:translate-y-[200px] transition"
      aria-labelledby="skip-btn"
    >
      <button
        id="skip-btn"
        className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
      >
        Skip to Main Content
      </button>
    </Link>
  );
};

export default SkipToMain;
