import AboutSectionOne from "@/components/About/AboutSectionOne";
import { Carousel } from "@/components/Carousel";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Itegrations } from "@/components/Integrations";
import { Metrics } from "@/components/Metrics";
import { Demo } from "@/components/SeeItInAction";
import Testimonials from "@/components/Testimonials";
import { ThatsNotIt } from "@/components/ThatsNotIt";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SeedsAI",
  description:
    "Transform conversation into Insights that help you take date driven decisions",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Carousel />
      <AboutSectionOne />
      <Features />
      <Metrics />
      <HowItWorks />
      <ThatsNotIt />
      {/* <Video /> */}
      {/* <Brands /> */}
      <Itegrations />
      <Demo />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing />
      <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
