"use client";
import React, { useRef } from "react";
import Steps from "./steps";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import { useInView, motion } from "framer-motion";

export const HowItWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const variants = {
    initial: { opacity: 0, y: 100 }, // Common initial state
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
        initial={"initial"}
        animate={inView ? "animate" : "initial"}
        transition={{ delay: 0.1 }}
        id="features"
        className="flex flex-col items-center justify-center  py-8 md:py-10 lg:py-12"
      >
        <h1 className=" text-3xl font-extrabold text-black dark:text-white lg:text-5xl">
          How it Works?
        </h1>
        <div className="container px-0 ">
          <motion.div
            ref={ref}
            variants={variants}
            initial={"initial"}
            animate={inView ? "animate" : "initial"}
            transition={{ delay: 0.2 }}
            className={
              "flex flex-col items-center justify-center gap-4 lg:gap-12"
            }
          >
            <Image
              src={"/images/seedsaihero.png"}
              alt="How It Works Section"
              width={1000}
              height={481}
              className="block rounded-md dark:hidden"
            />
            <Image
              src={"/images/seedsaiherodark.png"}
              alt="How It Works Section"
              width={1000}
              height={481}
              className="hidden rounded-md dark:block"
            />
            <Steps />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
