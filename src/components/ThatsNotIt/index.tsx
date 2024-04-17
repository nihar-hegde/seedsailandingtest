"use client";
import Image from "next/image";
import { data } from "./data";
import SectionTitle from "../Common/SectionTitle";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CardWrapper } from "../ui/CardWrapper";

export const ThatsNotIt = () => {
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
        transition={{ delay: 0.1 }}
        id="features"
        className="relative flex flex-col items-center justify-center px-2 py-5 md:py-8 lg:py-10 "
      >
        <div className="absolute right-[11rem] top-[50rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#0098d9]/10 blur-[10rem] dark:bg-[#0098d9]/10 sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#0098d9]/10 blur-[10rem] dark:bg-[#0098d9]/10 sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        {/* <SectionTitle title={"Well, that's not it"} center /> */}
        <div className=" flex flex-col gap-8 lg:container ">
          {data.map((item, index) => (
            <CardWrapper
              key={item.id}
              customClasses="rounded-2xl lg:rounded-[100px] px-4 py-4 lg:py-2"
            >
              <motion.div
                ref={ref}
                variants={variants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ delay: 0.2 }}
                key={item.id}
                className={`flex flex-col items-center justify-center gap-2 p-2  ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                } `}
              >
                <div className="w-full p-2 md:w-auto">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={400}
                    height={100}
                    className="block dark:hidden"
                  />
                  <Image
                    src={item.darkUrl}
                    alt={item.title}
                    width={400}
                    height={100}
                    className="hidden dark:block"
                  />
                </div>
                <div className="flex flex-col items-start gap-4 p-4 md:w-2/3">
                  <h2 className="mb-0 text-2xl font-extrabold text-black dark:text-white lg:mb-5 lg:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mb-0 text-lg font-medium text-black dark:text-white lg:mb-2">
                    {item.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2 text-xs lg:text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right shrink-0 text-[#0098d9]"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                      <p className="text-normal lg:text-md text-black dark:text-white">
                        {item.point1}
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2  text-xs lg:text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right shrink-0 text-[#0098d9]"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                      <p className="text-normal lg:text-md">{item.point2}</p>
                    </div>
                    {item.point3 ? (
                      <div className="flex flex-row items-center justify-center gap-2 text-xs lg:text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right shrink-0 text-[#0098d9]"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                        <p className="text-normal lg:text-md">{item.point3}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            </CardWrapper>
          ))}
        </div>
      </motion.section>
    </>
  );
};
