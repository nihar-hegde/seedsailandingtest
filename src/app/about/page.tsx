import { AboutPageDat } from "@/components/About/AboutPage";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us ",
  description: "This is About Page for SeedsAI",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="About Us" description={""} />
      <AboutPageDat />
    </>
  );
};

export default AboutPage;
