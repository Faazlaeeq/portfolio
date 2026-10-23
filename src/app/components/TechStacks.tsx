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
        duration: 35,
        ease: "linear",
      },
    },
  },
};

const DEFAULT_STACK: string[] = [
  "Agentic AI (CrewAI)",
  "AWS Bedrock & Lambda",
  "Python (FastAPI)",
  "Node.js & Express",
  "TypeScript",
  "LangChain & RAG",
  "C# & .NET Core",
  "MS SQL Server",
  "Next.js & React",
  "Docker & CI/CD",
  "Flutter & Dart",
  "Hopsworks Feature Store",
];

export default function TechStacks({
  initialTechStacks = [],
}: {
  initialTechStacks?: Technology[];
}) {
  const [techStacks, setTechStacks] = useState<string[]>(
    initialTechStacks.length > 0
      ? Array.from(new Set([...DEFAULT_STACK, ...initialTechStacks.map((t) => t.technology)]))
      : DEFAULT_STACK
  );

  useEffect(() => {
    if (initialTechStacks && initialTechStacks.length > 0) return;

    const getStacks = async function () {
      try {
        const stacks = await getTechStacks();
        if (stacks && stacks.length > 0) {
          setTechStacks(
            Array.from(new Set([...DEFAULT_STACK, ...stacks.map((t) => t.technology)]))
          );
        }
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
          txt="CORE TECH & SKILLS"
          className="mb-4 text-center text-[22px] font-bold tracking-[4px]"
        />
        <h2 className="mx-auto max-w-[800px] text-center text-[30px] font-bold leading-[120%] tracking-[0.5px] md:text-[42px]">
          Tools & architectures I build production software with.
        </h2>
      </FadeUp>
      <div className="relative mt-10 overflow-hidden">
        <div className="absolute -left-2 z-10 h-full w-[20px] lg:w-[30px] xl:w-[40px]" />
        <div className="absolute -right-2 z-10 h-full w-[20px] lg:w-[30px] xl:w-[40px]" />
        <motion.div
          className="flex justify-center gap-6 whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {techStacks.map((tech, idx) => (
            <span
              key={`tech-${idx}`}
              className="dancingScript mx-4 text-xl font-bold tracking-[4px] text-gray-500 hover:text-white transition-colors md:text-2xl"
            >
              {tech}
            </span>
          ))}
          {techStacks.map((tech, idx) => (
            <span
              key={`duplicate-${idx}`}
              className="dancingScript mx-4 text-xl font-bold tracking-[4px] text-gray-500 hover:text-white transition-colors md:text-2xl"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
