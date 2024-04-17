import React from "react";
import Image from "next/image";
import { logos } from "./data";

export const Carousel = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6   ">
      <div className="text-center">
        <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
            {logos.map((logo, index) => (
              <li key={index} className="">
                <Image
                  src={logo.lightsrc}
                  alt={logo.alt}
                  width={100}
                  height={50}
                  className="block object-contain dark:hidden"
                />
                <Image
                  src={logo.darksrc}
                  alt={logo.alt}
                  width={100}
                  height={50}
                  className="hidden object-contain dark:block"
                />
              </li>
            ))}
          </ul>
          <ul
            className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
            aria-hidden="true"
          >
            {logos.map((logo, index) => (
              <li key={index}>
                <Image
                  src={logo.lightsrc}
                  alt={logo.alt}
                  width={100}
                  height={50}
                  className="block object-contain dark:hidden"
                />
                <Image
                  src={logo.darksrc}
                  alt={logo.alt}
                  width={100}
                  height={50}
                  className="hidden object-contain dark:block"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
