"use client";

import CustomBtn from "./Reusables/CustomBtn";
import GradientTxt from "./Reusables/GradientTxt";
import profImg from "../../../public/faaz-profile-circle.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="my-[80px] items-center gap-16 xl:flex">
      <div>
        <h1 className="mb-4 text-[32px] font-bold leading-[115%] md:text-[52px] lg:text-[56px]">
          Software Engineer specializing in{" "}
          <GradientTxt tagName="span" txt="Agentic AI" />.
        </h1>

        <p className="mb-16 text-[19px] leading-relaxed text-[#666] lg:text-[22px]">
          Hi! I&apos;m Ahmed Faaz Laeeq — a Software Engineer with Agentic AI expertise, actively looking for entry-level opportunities. With an Associate Degree in Software Development (CGPA 3.88), completing my BS in FinTech (CGPA 3.87) at MAJU, and a verified Udacity AWS Agent Engineer Nanodegree, I combine strong CS fundamentals, backend API engineering (FastAPI, Node.js, .NET), and hands-on experience building autonomous multi-agent systems with CrewAI and AWS Bedrock.
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

      <div className="mx-auto aspect-square w-full max-w-[420px] shrink-0 lg:max-w-[480px]">
        <Image
          src={profImg}
          alt="Ahmed Faaz Laeeq"
          width={764}
          height={764}
          className="size-full rounded-full border border-neutral-800 object-cover shadow-2xl"
          priority
        />
      </div>
    </section>
  );
}
