"use client";
import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import AudioPlayer from "./AudioPlayer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Demo = () => {
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
        className="mx-auto flex max-w-5xl flex-col  items-center justify-center px-2 py-10 md:py-10 lg:py-12"
      >
        <SectionTitle title={"See It In Action"} center />
        <div className="container">
          <motion.div
            ref={ref}
            variants={variants}
            initial={"initial"}
            animate={inView ? "animate" : "initial"}
            transition={{ delay: 0.2 }}
            className={
              "flex flex-col items-center  justify-center gap-12 p-2 md:flex-row "
            }
          >
            <div className="w-auto p-2">
              <Image
                src={"/images/seeItInAction/call-record-icon.svg"}
                alt="Recording image"
                width={100}
                height={100}
                className="rounded-md bg-white p-3 "
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <h2 className="text-lg font-semibold">Sample Audio</h2>
              <AudioPlayer src={""} />
            </div>
            <div>
              <Image
                src={"/right-arrow.svg"}
                width={50}
                height={50}
                alt="Right arrow"
                className="block rotate-90 dark:hidden lg:rotate-0"
              />
              <Image
                src={"/right-arrow_dark.svg"}
                width={50}
                height={50}
                alt="Right arrow"
                className="hidden rotate-90 dark:block lg:rotate-0"
              />
            </div>
            <div>
              <a
                target="_blank"
                href={
                  "https://www.seedsai.co/_files/ugd/d3f344_a5f42e908454443fb97297f2cb650be9.pdf"
                }
                className="flex flex-col items-center gap-2"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={"/report.png"}
                    width={100}
                    height={50}
                    alt="report"
                  />
                  <p className="underline">Sample Report</p>
                </div>
                <p className="text-xs ">*Click above to donwload the report</p>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
