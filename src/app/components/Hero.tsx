"use client";

import GradientTxt from "./Reusables/GradientTxt";
import profImg from "../../../public/faaz-profile-square.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-120px)] items-center py-6 lg:py-10">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-12 xl:flex-row xl:gap-16">
        <div className="max-w-[680px]">
          <h1 className="mb-5 text-[34px] font-bold leading-[115%] md:text-[52px] lg:text-[58px]">
            Software Engineer specializing in{" "}
            <GradientTxt tagName="span" txt="Agentic AI" />.
          </h1>

          <p className="mb-10 text-[18px] leading-relaxed text-neutral-200 md:text-[21px]">
            I build AI agents and the backend APIs around them. I&apos;ve completed Udacity&apos;s AWS Agent Engineer Nanodegree and I&apos;m finishing my BS in FinTech at MAJU (CGPA 3.87). Looking for an entry-level role.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-[48px] items-center justify-center rounded-lg bg-white px-7 text-sm font-semibold text-black shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-neutral-200 active:scale-[0.98] sm:text-base"
            >
              Get in Touch
            </Link>

            <Link
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Faaz_Laeeq_CV.pdf"
              className="group inline-flex h-[48px] items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900/60 px-7 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:border-neutral-500 hover:bg-neutral-800 active:scale-[0.98] sm:text-base"
            >
              <span>Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1"
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

        <div className="mx-auto aspect-square w-full max-w-[340px] shrink-0 sm:max-w-[400px] lg:max-w-[460px]">
          <Image
            src={profImg}
            alt="Ahmed Faaz Laeeq"
            width={764}
            height={764}
            className="size-full rounded-full border border-neutral-800 object-cover shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
