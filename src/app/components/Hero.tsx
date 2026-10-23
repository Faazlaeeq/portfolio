"use client";

import CustomBtn from "./Reusables/CustomBtn";
import GradientTxt from "./Reusables/GradientTxt";
import profImg from "../../../public/me with border circle.png";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="my-[60px] items-center gap-16 xl:my-[80px] xl:flex">
      <div className="flex-1">
        {/* Looking for Job Status Pill */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-800/80 bg-emerald-950/40 px-4 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
          </span>
          Actively Seeking Software Engineer & Backend / AI Roles
        </div>

        <h1 className="mb-6 text-[38px] font-bold leading-[110%] md:text-[62px] lg:text-[68px]">
          Engineering scalable backends &{" "}
          <GradientTxt tagName="span" txt="Autonomous Agentic AI" /> systems.
        </h1>

        <p className="mb-10 text-[18px] leading-relaxed text-[#999] md:text-[20px] lg:max-w-[650px]">
          Hi, I&apos;m <span className="font-semibold text-white">Ahmed Faaz Laeeq</span> — a Software Engineer with an AD in Software Development (CGPA 3.88) and BS in FinTech (CGPA 3.87). I build production backend services in Node.js, FastAPI, and .NET, design normalized relational databases, and build autonomous multi-agent pipelines with CrewAI, LangChain, and AWS Bedrock AgentCore.
        </p>

        <div className="mb-12 flex flex-wrap items-center gap-4">
          <CustomBtn txt="Get in Touch" className="w-[160px]" href="/contact" />

          <Link
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Faaz_Laeeq_CV.pdf"
            className="group flex cursor-pointer items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-950 px-5 py-3 text-base font-semibold text-white transition-all hover:border-neutral-600 hover:bg-neutral-900"
          >
            <FileText className="size-4 text-blue-400" />
            <span>Download Latest CV</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 gap-4 border-t border-neutral-900 pt-6 sm:grid-cols-3">
          <div>
            <div className="text-2xl font-bold text-white">10+</div>
            <div className="text-xs text-[#777]">Client Projects Delivered</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400">3.88</div>
            <div className="text-xs text-[#777]">Software Dev CGPA (MAJU)</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">Agentic AI</div>
            <div className="text-xs text-[#777]">CrewAI & AWS Bedrock</div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center xl:mt-0 xl:block">
        <Image
          src={profImg}
          alt="Ahmed Faaz Laeeq"
          className="w-full max-w-[420px] rounded-full border-2 border-neutral-800 object-cover shadow-2xl lg:max-w-[460px]"
          priority
        />
      </div>
    </section>
  );
}
