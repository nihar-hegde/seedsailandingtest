"use client";
import Image from "next/image";
import { data } from "./data";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Itegrations = () => {
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
    <section ref={ref} className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap border-t border-body-color/[.15] pt-16 dark:border-white/[.15] ">
          <div className=" w-full    px-4">
            <motion.h2
              ref={ref}
              variants={variants}
              initial={"initial"}
              animate={inView ? "animate" : "initial"}
              transition={{ delay: 0.1 }}
              className="mb-8 text-center text-3xl font-bold text-black dark:text-white lg:text-5xl "
            >
              Seemless Integrations
            </motion.h2>
            <motion.div
              ref={ref}
              variants={variants}
              initial={"initial"}
              animate={inView ? "animate" : "initial"}
              transition={{ delay: 0.2 }}
              className=" flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark/30 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
            >
              {data.map((item) => (
                <SingleBrand key={item.id} brandData={item} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface Props {
  id: number;
  title: string;
  logoUrl: string;
  darkLogoUrl: string;
}

const SingleBrand = ({ brandData }: { brandData: Props }) => {
  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <Link
        href={"/"}
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-100 transition hover:opacity-70 dark:opacity-100 dark:hover:opacity-80"
      >
        <Image
          src={brandData.darkLogoUrl}
          alt={brandData.title}
          fill
          className="hidden dark:block"
        />
        <Image
          src={brandData.logoUrl}
          alt={brandData.title}
          fill
          className="block dark:hidden"
        />
      </Link>
    </div>
  );
};
