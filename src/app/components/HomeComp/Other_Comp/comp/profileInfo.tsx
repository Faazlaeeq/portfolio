"use client";

import GradientTxt from "../../../Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";
import { Bot, Server, Award, Briefcase, Terminal } from "lucide-react";
import Link from "next/link";

export default function ProfileInfo() {
  const highlights = [
    {
      icon: Bot,
      title: "Agentic AI & LLMs",
      desc: "CrewAI multi-agent crews, AWS Bedrock AgentCore, LangChain, tool calling, and production RAG pipelines with vector databases.",
      badge: "Primary Focus",
    },
    {
      icon: Server,
      title: "Backend & Systems",
      desc: "High-throughput APIs in Python (FastAPI), Node.js, and C# .NET Core with normalized MS SQL Server and PostgreSQL schemas.",
      badge: "Core Engineering",
    },
    {
      icon: Award,
      title: "Academic Honors",
      desc: "3.88 CGPA in Associate Degree Software Development (Magna Cum Laude) & 3.87 CGPA in BS Financial Technology at MAJU.",
      badge: "Top Tier",
    },
    {
      icon: Briefcase,
      title: "Proven Track Record",
      desc: "10+ client projects delivered on Upwork with 100% 5.0-star rating; former remote developer at Rubikkube.",
      badge: "100% 5.0 Rating",
    },
  ];

  return (
    <section id="about" className="mb-20">
      <FadeUp
        tag="div"
        className="mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row"
      >
        <div className="lg:max-w-[45%]">
          <GradientTxt
            txt="SOFTWARE ENGINEER & AGENTIC AI BUILDER"
            className="text-[16px] font-bold tracking-[3px] md:text-[20px]"
            tagName="h5"
          />
          <h2 className="mb-4 mt-2 text-[36px] font-bold leading-[115%] tracking-[0.5px] md:text-[50px]">
            Engineering resilient backends & autonomous intelligence.
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-800/80 bg-emerald-950/40 px-3.5 py-1 text-xs font-semibold text-emerald-400">
            <span className="size-2 rounded-full bg-emerald-400"></span>
            Actively Available for Full-Time Roles
          </div>
        </div>

        <div className="space-y-4 text-[16px] leading-relaxed text-[#888] md:text-[18px] lg:max-w-[52%]">
          <p>
            I am a Software Engineer who bridges robust system architecture with autonomous agentic intelligence. I graduated with an <span className="font-semibold text-white">Associate Degree in Software Development (CGPA 3.88 / 4.00, Magna Cum Laude)</span> and am completing my <span className="font-semibold text-white">Bachelor of Science in Financial Technology (CGPA 3.87 / 4.00)</span> at Mohammad Ali Jinnah University (MAJU).
          </p>
          <p>
            Over the past 4+ years, I have engineered production software across the lifecycle—from building cross-platform mobile systems with Bloc and Firebase at <span className="font-semibold text-white">Rubikkube (Remote)</span> to delivering 10+ freelance client projects on Upwork with an immaculate 5.0-star rating.
          </p>
          <p>
            My core engineering dedication centers on <span className="font-semibold text-white">Autonomous Agentic AI</span>: orchestrating multi-agent crews with CrewAI, LangChain, and AWS Bedrock AgentCore, implementing tool-calling agents, autonomous reasoning loops, and enterprise RAG systems with vector embeddings.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 transition-colors hover:text-emerald-400"
            >
              <Terminal className="size-4" />
              <span>Let&apos;s build together — get in touch &rarr;</span>
            </Link>
          </div>
        </div>
      </FadeUp>

      {/* Modern Highlight Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative rounded-2xl border border-neutral-800 bg-neutral-950/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:bg-neutral-900/60"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-blue-400 group-hover:border-neutral-700 group-hover:text-emerald-400">
                  <Icon className="size-5" />
                </div>
                <span className="rounded-full border border-neutral-800 bg-neutral-900/80 px-2.5 py-0.5 text-[11px] font-medium text-neutral-400">
                  {item.badge}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white group-hover:text-blue-300">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#777]">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
