"use client";

import CustomBtn from "./Reusables/CustomBtn";
import GradientTxt from "./Reusables/GradientTxt";
import profImg from "../../../public/me with border circle.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="my-[80px] items-center gap-16 xl:flex">
      <div>
        <h1 className="mb-4 text-[40px] font-bold leading-[110%] md:text-[68px] lg:text-[70px]">
          Engineering scalable backends &{" "}
          <GradientTxt tagName="span" txt="Autonomous Agentic AI" /> systems.
        </h1>

        <p className="mb-16 text-[19px] text-[#666] lg:text-[22px]">
          Hi! I&apos;m Ahmed Faaz Laeeq — a Software Engineer with an AD in Software Development (CGPA 3.88) and BS in FinTech (CGPA 3.87). I build production backend services in Node.js, FastAPI, and .NET, design normalized relational databases, and build autonomous multi-agent pipelines with CrewAI, LangChain, and AWS Bedrock AgentCore.
        </p>

        <div className="mb-16 flex flex-col gap-4 md:flex-row xl:items-center">
          <CustomBtn txt="Get in Touch" className="w-[160px]" href="/contact" />
          <Link
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Faaz_Laeeq_CV.pdf"
            className="group flex cursor-pointer items-center gap-2 text-lg font-bold"
          >
            <span>Download CV</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right transition-transform duration-500 group-hover:translate-x-3"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </Link>
        </div>
      </div>

      <Image
        src={profImg}
        alt="Ahmed Faaz Laeeq"
        className="mx-auto w-full rounded-full lg:w-[500px]"
        priority
      />
    </section>
  );
}
