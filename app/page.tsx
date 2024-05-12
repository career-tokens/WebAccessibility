"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Features from "@/components/ui/features";
import Navbar from "@/components/ui/navbar-menu";
import SkipToMain from "@/components/SkipToMain";

export default function Home() {
  return (
    <>
      <SkipToMain />
      <Navbar />
      <style>
        {/* proper styling to help identify the focused element */}
        {`
            *:focus{
              outline-color:red;
            }

            .nav{
              a:focus{
                outline:2px solid red !important;
              }
            }

            div:focus{
              outline:none;
              border:2px solid red !important;
            }
          `}
      </style>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center gap-y-12 justify-evenly px-4"
      >
        <div className="text-2xl sm:text-3xl font-bold dark:text-white text-center">
          Learn <span className="text-blue-400">Web Accessibility</span> with
          Practical Examples
        </div>
        <Link
          href="https://mainakkaniam.hashnode.dev/web-accessibility-for-beginners"
          id="blog"
        >
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Click here to Learn
          </button>
        </Link>
        <Features />
      </motion.div>
    </>
  );
}
