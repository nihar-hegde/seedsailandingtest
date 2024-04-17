import { cn } from "@/lib/utils";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
interface Props {
  customClassNames?: string;
}

export default function CalComIntegration({ customClassNames }: Props) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi("https://app.cal.id/embed/embed.js");
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <button
      data-cal-namespace=""
      data-cal-link="seedsai/democall"
      data-cal-origin="https://cal.id"
      data-cal-config='{"layout":"month_view"}'
      className="hover-dark glow-on-hover group relative z-50 mt-1 inline-block cursor-pointer rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline shadow-2xl shadow-zinc-900  lg:mt-5 "
    >
      <div
        data-cal-namespace=""
        data-cal-link="seedsai/democall"
        data-cal-origin="https://cal.id"
        data-cal-config='{"layout":"month_view"}'
        className="rounded=full absolute z-50 h-full w-full rounded-full  "
      />
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950  px-8 py-3 ring-1 ring-white/10 ">
        <span className="text-xl font-medium">Book a Demo</span>
        <div className={cn("w-7", customClassNames)}>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
}
