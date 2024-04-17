import React from "react";

const Steps = () => {
  return (
    <div className="flex w-full flex-col  justify-center px-6 py-1 md:flex-row md:items-center lg:flex-row">
      <div className="flex flex-row items-center justify-center gap-6">
        <div className="mb-4 flex   flex-col items-center justify-between gap-2 md:mb-0">
          <div className="flex h-4 w-4 shrink-0 translate-y-2 items-center justify-center rounded-full bg-black dark:bg-white dark:text-black lg:h-10 lg:w-10 lg:translate-y-0">
            <p className="text-sm font-bold text-white dark:text-black lg:text-2xl">
              1
            </p>
          </div>
          <div className="flex w-full items-center justify-center">
            <p className="mt-4 flex flex-col  text-center text-xs font-semibold lg:text-xl ">
              <span>Integrating with </span> <span> your Tools</span>
            </p>
          </div>
        </div>
        <div className="mx-4 hidden md:block md:flex-grow">
          <div className="h-1 w-full bg-gray-300 dark:bg-gray-700" />
        </div>
        <div className="mb-4 flex  flex-col items-center justify-between gap-2 md:mb-0">
          <div className="flex h-4  w-4 shrink-0 translate-y-2 items-center justify-center rounded-full bg-black dark:bg-white dark:text-black lg:h-10 lg:w-10 lg:translate-y-0">
            <p className="text-sm font-bold text-white dark:text-black lg:text-2xl">
              2
            </p>
          </div>
          <div className="flex w-full items-center justify-center">
            <p className="mt-4 flex flex-col text-center text-xs font-semibold  lg:text-xl">
              <span>Analyzing Interactions </span> <span> with AI</span>
            </p>
          </div>
        </div>
        <div className="mx-4 hidden md:block md:flex-grow">
          <div className="h-1 w-full bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>
      <div className="flex -translate-x-1 flex-row items-center justify-center gap-4 lg:translate-x-0">
        <div className="mb-4 flex   flex-col items-center justify-between gap-2 md:mb-0">
          <div className="flex h-4 w-4 shrink-0 translate-y-2 items-center justify-center rounded-full bg-black dark:bg-white dark:text-black lg:h-10 lg:w-10 lg:translate-y-0">
            <p className="text-sm font-bold text-white dark:text-black lg:text-2xl">
              3
            </p>
          </div>
          <div className="flex w-full items-center justify-center">
            <p className="mt-4 flex flex-col  text-center text-xs  font-semibold  lg:text-xl">
              <span> Getting insights to </span> <span> take decisions </span>
            </p>
          </div>
        </div>
        <div className="mx-4 hidden md:block md:flex-grow">
          <div className="h-1 w-full bg-gray-300 dark:bg-gray-700" />
        </div>
        <div className="mb-4 flex -translate-y-2 flex-col items-center justify-between gap-2 md:mb-0 lg:translate-y-0">
          <div className="flex h-4  w-4 shrink-0 translate-y-2 items-center justify-center rounded-full bg-black dark:bg-white dark:text-black lg:h-10 lg:w-10 lg:translate-y-0">
            <p className="text-sm font-bold text-white dark:text-black lg:text-2xl">
              4
            </p>
          </div>
          <div className="flex w-full items-center justify-center">
            <p className="mt-4  text-center text-xs font-semibold lg:text-xl">
              Increase In Numbers
            </p>
          </div>
        </div>
        <div className="mx-4 hidden md:block md:flex-grow">
          <div className="h-1 w-full bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default Steps;
