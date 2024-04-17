import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, point1, point2 } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp px-2 py-4" data-wow-delay=".15s">
        <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-lg font-semibold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl">
          {title}
        </h3>
        <p className="mb-4 pr-[10px] text-black  dark:text-white">
          {paragraph}
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
            <p>{point1}</p>
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
            <p>{point2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
