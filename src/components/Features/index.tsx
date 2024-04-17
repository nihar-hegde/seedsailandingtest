"use client";
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { motion, useInView } from "framer-motion";
import { CardWrapper } from "../ui/CardWrapper";

const Features = () => {
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
    <>
      <section id="features" className="py-8 md:py-10 lg:py-12">
        <motion.div
          ref={ref}
          variants={variants}
          initial={"initial"}
          animate={inView ? "animate" : "initial"}
          transition={{ delay: 0.1 }}
          className="container"
        >
          <SectionTitle
            title="Everything You Need to Boost  Agent Productivity"
            paragraph="Achive impactful results across the business."
            center
          />

          <motion.div
            ref={ref}
            variants={variants}
            initial={"initial"}
            animate={inView ? "animate" : "initial"}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuresData.map((feature) => (
              <CardWrapper key={feature.id} customClasses="lg:px-8">
                <SingleFeature feature={feature} />
              </CardWrapper>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Features;
