"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTechStacks } from "../../../sanity/sanity-utils";
import { toast } from "react-toastify";
import GradientTxt from "./Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";
import { Technology } from "../../../types/Technology";

const marqueeVariants = {
  animate: {
    x: ["100%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

export default function TechStacks({
  initialTechStacks = [],
}: {
  initialTechStacks?: Technology[];
}) {
  const [techStacks, setTechStacks] = useState<Technology[]>(initialTechStacks);

  useEffect(() => {
    if (initialTechStacks && initialTechStacks.length > 0) return;

    const getStacks = async function () {
      try {
        const stacks = await getTechStacks();
        setTechStacks(stacks);
      } catch (error) {
        toast.error("Failed to fetch tech stacks. Please try again later.");
      }
    };
    getStacks();
  }, [initialTechStacks]);

  return (
    <section className="mb-[108px]">
      <FadeUp tag="div" className="mb-16">
        <GradientTxt
          tagName="h6"
          txt="TECHNOLOGIES I USE"
          className="mb-4 text-center text-[22px] font-bold"
        />
      </FadeUp>
      <div className="relative mt-10 overflow-hidden">
        <div className="absolute -left-2 z-10 h-full w-[20px] lg:w-[30px] xl:w-[40px]" />
        <div className="absolute -right-2 z-10 h-full w-[20px] lg:w-[30px] xl:w-[40px]" />
        <motion.div
          className="flex justify-center gap-6 whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {techStacks.map((tech) => (
            <span
              key={tech._id}
              className="dancingScript mx-4 text-xl font-bold tracking-[4px] text-gray-600 md:text-2xl"
            >
              {tech.technology}
            </span>
          ))}
          {techStacks.map((tech) => (
            <span
              key={`duplicate-${tech._id}`}
              className="dancingScript mx-4 text-xl font-bold tracking-[4px] text-gray-600 md:text-2xl"
            >
              {tech.technology}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
