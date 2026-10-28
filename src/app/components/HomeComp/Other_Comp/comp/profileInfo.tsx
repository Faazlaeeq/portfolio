"use client";

import GradientTxt from "../../../Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";

export default function ProfileInfo() {
  return (
    <section id="about">
      <FadeUp
        tag="div"
        className="mb-20 flex flex-col items-start justify-between gap-4 lg:flex-row"
      >
        <div>
          <GradientTxt
            txt="ENTRY-LEVEL SOFTWARE ENGINEER"
            className="text-[22px] font-bold tracking-[4px]"
            tagName="h5"
          />
          <h2 className="mb-4 mt-2 text-[40px] font-bold leading-[120%] tracking-[0.5px] md:text-[54px]">
            That&apos;s me!
          </h2>
        </div>
        <p className="text-[19px] leading-[40px] text-[#666] md:text-[22px] lg:max-w-[50%]">
          I am an entry-level Software Engineer with specialized hands-on expertise in Autonomous Agentic AI. Graduating with an Associate Degree in Software Development (CGPA 3.88, Magna Cum Laude) and completing my BS in Financial Technology (CGPA 3.87) at MAJU, I pair rigorous academic training with practical delivery—including certified Nanodegree training as a Future AWS Agent Engineer, remote mobile engineering at Rubikkube, and 10+ freelance projects on Upwork with a 5.0 rating. I am actively seeking an entry-level Software Engineer, Associate AI Engineer, or Junior Backend Developer role where I can apply autonomous multi-agent systems (CrewAI, LangChain, AWS Bedrock) and reliable API backends (FastAPI, Node.js, .NET, SQL) to create business impact and grow within an engineering team.
        </p>
      </FadeUp>
    </section>
  );
}
