"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function GetStartedButtons() {
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
      className="ease-in-up hidden rounded-sm bg-[#0098d9] px-8 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
      data-cal-namespace=""
      data-cal-link="seedsai/democall"
      data-cal-origin="https://cal.id"
      data-cal-config='{"layout":"month_view"}'
    >
      Get Started
    </button>
  );
}
