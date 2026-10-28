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
            txt="SOFTWARE ENGINEER & AGENTIC AI"
            className="text-[22px] font-bold tracking-[4px]"
            tagName="h5"
          />
          <h2 className="mb-4 mt-2 text-[40px] font-bold leading-[120%] tracking-[0.5px] md:text-[54px]">
            That&apos;s me!
          </h2>
        </div>
        <p className="text-[19px] leading-[40px] text-[#666] md:text-[22px] lg:max-w-[50%]">
          I am a Software Engineer bridging robust system architecture with autonomous agentic intelligence. With an Associate Degree in Software Development (CGPA 3.88, Magna Cum Laude) and completing my BS in Financial Technology (CGPA 3.87) at MAJU, I bring 4+ years of real-world engineering experience—from developing mobile systems at Rubikkube to shipping 10+ freelance client projects on Upwork with a 5.0 rating. My core dedication is architecting autonomous multi-agent pipelines with CrewAI, LangChain, and AWS Bedrock AgentCore, alongside resilient backend APIs in Python FastAPI, Node.js, and C# .NET.
        </p>
      </FadeUp>
    </section>
  );
}
