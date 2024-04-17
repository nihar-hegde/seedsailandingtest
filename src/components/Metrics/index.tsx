"use client";
import React from "react";
import { metricsData } from "./metricsData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Metrics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const variants = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
      <motion.section
        ref={ref}
        variants={variants}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        transition={{ delay: 0.2 }}
        id="features"
        className="relative bg-transparent py-5 md:py-8 lg:py-10"
      >
        <div className="absolute left-1/2  right-10 top-1/2 -z-10 hidden h-[10rem]  w-[10rem] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#0098d9] blur-[10rem] dark:bg-[#0098d9] sm:w-[20rem] lg:block"></div>
        <div className="mx-auto flex  items-center justify-center ">
          <div className="bg-gradient-to-r from-transparent via-[#0098d9]/50 to-transparent py-1 ">
            <div className=" container h-full w-full bg-white p-4 dark:bg-gray-950">
              <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-5">
                {metricsData.map((item) => (
                  <div
                    className={`col-span-1 flex flex-col items-center gap-1 md:col-span-1 lg:col-span-1
                              ${item.id === 3 && "hidden sm:flex"}`}
                    key={item.id}
                  >
                    <p className="text-xl font-bold text-black dark:text-white lg:text-5xl ">
                      {item.title}
                    </p>
                    <p className="max-w-40 text-center text-xs">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
