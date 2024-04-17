"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const List = ({ text }) => (
    <p className="font-sm text-md mb-5 flex items-start tracking-wide text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  const variants = {
    initial: { opacity: 0, y: 100 }, // Common initial state
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  return (
    <section id="about" className="pt-5 md:pt-8 lg:pt-10">
      <div ref={ref} className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center lg:mx-4">
            <div className="w-full px-8 lg:w-1/2">
              <motion.h1
                ref={ref}
                variants={variants}
                initial={"initial"}
                animate={inView ? "animate" : "initial"}
                transition={{ delay: 0.1 }}
                className="mb-5 text-start text-xl font-semibold text-black dark:text-white lg:text-2xl"
              >
                AI-Powered Interaction Analytics for Informed, Real-time
                Decisions
              </motion.h1>

              <motion.div
                ref={ref}
                variants={variants}
                initial={"initial"}
                animate={inView ? "animate" : "initial"}
                transition={{ delay: 0.2 }}
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className=" flex ">
                  <div className="w-full px-3 sm:w-full lg:w-full xl:w-full">
                    <motion.div variants={variants}>
                      <List text="Unlock hidden insights from your enterprise data with super accurate conversational analytics." />
                    </motion.div>
                    <motion.div variants={variants}>
                      <List text="Leverage advanced language models and GenAI to gain a deeper understanding of agents & customer interactions" />
                    </motion.div>

                    <motion.div variants={variants}>
                      <List text="Optimize your operations and enhance customer experiences through data-driven decision-making" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                ref={ref}
                variants={variants}
                initial={"initial"}
                animate={inView ? "animate" : "initial"}
                transition={{ delay: 0.1 }}
                className="relative mx-auto aspect-[16/9] max-w-[600px] lg:mr-0"
              >
                <Image
                  src="/aboutimage.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/aboutimage.png"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
