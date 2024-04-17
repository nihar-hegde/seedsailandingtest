import React from "react";

export const NewsLetter = () => {
  return (
    <section className=" bg-transparent p-4">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center sm:text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:mb-10">
          Join our newsletter
        </h2>
        <form action="">
          <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:rounded-none sm:rounded-l-lg"
                placeholder="Enter your email"
                type="email"
                id="email"
              />
            </div>
            <div>
              <button
                type="submit"
                className="border-primary-600  w-full   cursor-pointer rounded-lg   
                bg-gray-200 px-5  py-3 text-center text-sm font-medium
                text-black transition-colors hover:bg-gray-300 focus:ring-4 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-900 sm:rounded-none sm:rounded-r-lg"
              >
                Join
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
