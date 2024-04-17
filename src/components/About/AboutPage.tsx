import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardWrapper } from "../ui/CardWrapper";

export const AboutPageDat = () => {
  return (
    <section id="about" className="pt-5 md:pt-8 lg:pt-10">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center lg:mx-4 lg:flex-row-reverse">
            <div className="mt-10 w-full px-2 lg:mt-0 lg:w-1/2 lg:px-4">
              <div className="relative mx-auto aspect-[16/9] max-w-[600px] lg:mr-0">
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
              </div>
            </div>

            <div className="w-full px-8 lg:w-1/2">
              <p className="font-medium text-black dark:text-white">
                At SeedsAI, we believe that the key to unlocking exponential
                growth lies in the rich tapestry of data woven throughout your
                organization. Our mission is to help businesses like yours
                harness the power of this untapped data and transform it into
                actionable insights that drive remarkable results.
              </p>
              <div className="mt-2 flex flex-col gap-3">
                <CardWrapper customClasses="p-2 lg:p-6">
                  <div className="flex flex-col gap-2 text-black dark:text-white">
                    <h1 className=" text-xl font-bold text-black dark:text-white lg:text-2xl">
                      Unparalleled Omnichannel Visibility:
                    </h1>
                    <p className="text-sm text-black dark:text-white">
                      Our platform seamlessly integrates with your entire
                      customer interaction ecosystem, capturing and analyzing
                      100% of your voice, chat, and email conversations. This
                      allows us to provide you with a holistic understanding of
                      your customers&apos; needs, preferences, and behaviors,
                      enabling you to deliver personalized experiences that
                      foster lasting loyalty.
                    </p>
                  </div>
                </CardWrapper>
                <CardWrapper customClasses="p-2 lg:p-6">
                  <div className="flex flex-col gap-2 text-black dark:text-white">
                    <h1 className=" text-xl font-bold text-black dark:text-white lg:text-2xl">
                      Intelligent Optimization and Automation:
                    </h1>
                    <p className="text-sm text-black dark:text-white">
                      Leveraging the power of generative AI, our platform
                      identifies opportunities for optimization, automates
                      repetitive tasks, and empowers your agents with real-time
                      insights and tailored recommendations. This results in
                      enhanced productivity, reduced operational costs, and
                      improved customer satisfaction
                    </p>
                  </div>
                </CardWrapper>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <p className="text-xl font-bold text-black dark:text-white">
                  Sounds Interesting?
                </p>

                <div className=" flex flex-col items-center justify-center">
                  <Link href={"/contact"}>
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0098d9_0%,#393BB2_50%,#0098d9_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-xl font-bold text-white backdrop-blur-3xl">
                        Lets Connect!
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
