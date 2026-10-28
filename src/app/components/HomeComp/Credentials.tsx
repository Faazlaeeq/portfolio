"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import GradientTxt from "../Reusables/GradientTxt";
import { X, ExternalLink, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DocumentCredential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  pdfUrl?: string;
  verificationUrl?: string;
  logo: string;
  description: string;
}

const DOCUMENT_CREDENTIALS: DocumentCredential[] = [
  {
    id: "udacity-aws-agent",
    title: "Future AWS Agent Engineer (Nanodegree)",
    issuer: "Udacity (Part of Accenture)",
    date: "October 2026",
    image: "/credentials/udacity-future-aws-agent-engineer-nanodegree.png",
    pdfUrl: "/credentials/udacity-future-aws-agent-engineer-nanodegree.pdf",
    verificationUrl:
      "https://www.udacity.com/certificate/e/c0d36cd2-900d-11f1-925c-eff75458ddbc",
    logo: "/logos/udacity-logo.svg",
    description:
      "Autonomous multi-agent architectures, CrewAI orchestration, AWS Bedrock, Lambda & Agentic RAG workflows.",
  },
  {
    id: "maju-degree",
    title: "Associate Degree in Software Development",
    issuer: "Mohammad Ali Jinnah University (MAJU)",
    date: "October 2024",
    image: "/credentials/maju-associate-degree-software-development.jpg",
    logo: "/logos/maju-logo.png",
    description:
      "Graduated Magna Cum Laude (CGPA: 3.88 / 4.00). Computer science fundamentals, data structures, algorithms & software design.",
  },
  {
    id: "aptech-diploma",
    title: "Advanced Diploma in Software Engineering",
    issuer: "Aptech Computer Education",
    date: "December 2022",
    image: "/credentials/aptech-advanced-diploma-software-engineering.jpg",
    logo: "/logos/aptech-logo.png",
    description:
      "Enterprise application architecture, relational databases, algorithms & C# / .NET development.",
  },
  {
    id: "udacity-aws-ai",
    title: "AWS AI Practitioner Challenge",
    issuer: "Udacity (Part of Accenture)",
    date: "June 2026",
    image: "/credentials/udacity-aws-ai-practitioner-certificate.png",
    pdfUrl: "/credentials/udacity-aws-ai-practitioner-certificate.pdf",
    verificationUrl:
      "https://www.udacity.com/certificate/e/9fd0fdf6-340a-11f1-8447-d7f20d8c41a3",
    logo: "/logos/udacity-logo.svg",
    description:
      "Foundational cloud AI concepts, machine learning pipelines, and AWS artificial intelligence services.",
  },
  {
    id: "hackerrank-sql",
    title: "SQL (Intermediate) Certificate",
    issuer: "HackerRank",
    date: "February 2024",
    image: "/credentials/hackerrank-sql-intermediate-certificate.png",
    pdfUrl: "/credentials/hackerrank-sql-intermediate-certificate.pdf",
    logo: "/logos/hackerrank-logo.svg",
    description:
      "Complex joins, subqueries, aggregation functions, query optimization, and relational data modeling.",
  },
  {
    id: "udemy-flutter",
    title: "Flutter & Dart - The Complete Guide",
    issuer: "Udemy (Academind)",
    date: "February 2025",
    image: "/credentials/udemy-flutter-dart-certificate.jpg",
    verificationUrl: "https://ude.my/UC-bb16454e-1959-4ff1-accf-958ea59db2ef",
    logo: "/logos/udemy-logo.png",
    description:
      "Cross-platform mobile engineering, Bloc state management, animations, and REST backend integration.",
  },
  {
    id: "10pearls-cert",
    title: "10Pearls Shine Internship — Data Sciences",
    issuer: "10Pearls (Pvt) Ltd.",
    date: "2026",
    image: "/credentials/10pearls-certificate-photo.jpg",
    pdfUrl: "/credentials/Ahmed_Faaz_Laeeq_certificate.pdf",
    logo: "/logos/10p-logo.svg",
    description:
      "Exploratory data analysis, predictive statistical modeling, feature engineering & Scikit-Learn pipelines.",
  },
];

export default function Credentials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModal, setActiveModal] = useState<DocumentCredential | null>(null);

  const length = DOCUMENT_CREDENTIALS.length;
  const prevIndex = (currentIndex - 1 + length) % length;
  const nextIndex = (currentIndex + 1) % length;

  const activeCred = DOCUMENT_CREDENTIALS[currentIndex];
  const prevCred = DOCUMENT_CREDENTIALS[prevIndex];
  const nextCred = DOCUMENT_CREDENTIALS[nextIndex];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + length) % length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      } else if (!activeModal) {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    if (activeModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeModal, length]);

  return (
    <section id="credentials" className="w-full bg-black py-16 lg:py-24">
      {/* Clean section header matching original website style */}
      <div className="container mx-auto mb-10 px-5 lg:px-20">
        <GradientTxt
          tagName="h5"
          txt="CREDENTIALS & DEGREES"
          className="text-[20px] font-bold tracking-[3px]"
        />
      </div>

      {/* 1. Centered Coverflow Slideshow with Peeked Previous and Next Slides */}
      <div className="relative mx-auto flex w-full max-w-[1100px] items-center justify-center overflow-hidden px-4 py-4">
        {/* Previous Slide (Left Peek) */}
        <div
          onClick={handlePrev}
          className="absolute left-0 z-10 hidden w-[38%] -translate-x-6 cursor-pointer opacity-35 transition-all duration-300 hover:opacity-70 md:block"
        >
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg border border-neutral-800 bg-black">
            <Image
              src={prevCred.image}
              alt={prevCred.title}
              fill
              className="object-contain p-2"
              sizes="33vw"
            />
          </div>
        </div>

        {/* Center Active Slide */}
        <div className="relative z-20 w-full max-w-[680px]">
          <div
            onClick={() => setActiveModal(activeCred)}
            className="group relative aspect-[16/11] w-full cursor-pointer overflow-hidden rounded-lg border border-neutral-800 bg-black"
          >
            <Image
              src={activeCred.image}
              alt={activeCred.title}
              fill
              className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 680px"
              priority
            />
            {/* Hover overlay hint */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <span className="flex items-center gap-2 rounded-md border border-neutral-700 bg-black/90 px-4 py-2 text-xs font-semibold text-white">
                <Maximize2 className="size-4 text-emerald-400" />
                Click to inspect document
              </span>
            </div>
          </div>
        </div>

        {/* Next Slide (Right Peek) */}
        <div
          onClick={handleNext}
          className="absolute right-0 z-10 hidden w-[38%] translate-x-6 cursor-pointer opacity-35 transition-all duration-300 hover:opacity-70 md:block"
        >
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg border border-neutral-800 bg-black">
            <Image
              src={nextCred.image}
              alt={nextCred.title}
              fill
              className="object-contain p-2"
              sizes="33vw"
            />
          </div>
        </div>

        {/* Navigation Arrow Overlays for Mobile / Quick Click */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous credential"
          className="absolute left-2 z-30 flex size-9 items-center justify-center rounded-full border border-neutral-800 bg-black/80 text-white transition-colors hover:border-neutral-600 hover:bg-neutral-900 md:left-6"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next credential"
          className="absolute right-2 z-30 flex size-9 items-center justify-center rounded-full border border-neutral-800 bg-black/80 text-white transition-colors hover:border-neutral-600 hover:bg-neutral-900 md:right-6"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {/* Slide Details & Clean Action Links */}
      <div className="mx-auto mt-6 max-w-[680px] px-4 text-center">
        <h3 className="text-lg font-bold text-white md:text-2xl">
          {activeCred.title}
        </h3>
        <p className="mt-1 text-sm text-[#888]">
          {activeCred.issuer} · {activeCred.date}
        </p>

        {/* Direct Action Links */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => setActiveModal(activeCred)}
            className="flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 transition-colors hover:text-emerald-400"
          >
            <Maximize2 className="size-4" />
            <span>View Full Document</span>
          </button>

          {activeCred.verificationUrl && (
            <a
              href={activeCred.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-emerald-400 underline underline-offset-4 transition-colors hover:text-emerald-300"
            >
              <span>Verify Online</span>
              <ExternalLink className="size-3.5" />
            </a>
          )}
        </div>

        {/* Number Indicators with generous space in between */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {DOCUMENT_CREDENTIALS.map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to credential ${idx + 1}`}
                className={`text-sm sm:text-base font-bold transition-all duration-200 px-2 py-1 ${
                  isActive
                    ? "text-white border-b-2 border-white scale-110"
                    : "text-neutral-600 hover:text-neutral-400"
                }`}
              >
                {String(idx + 1).padStart(2, "0")}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Separate List of All Certifications & Credentials */}
      <div className="container mx-auto mt-20 px-5 lg:px-20">
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <GradientTxt
              tagName="h5"
              txt="CREDENTIALS DIRECTORY"
              className="text-[14px] font-bold tracking-[3px]"
            />
            <h4 className="mt-2 text-[27px] font-bold text-white md:text-[36px]">
              📜 Verified Credentials List
            </h4>
          </div>
          <span className="text-sm text-neutral-500">
            Click any entry to inspect certificate document or verify
          </span>
        </div>

        <div className="flex flex-col gap-6">
          {DOCUMENT_CREDENTIALS.map((cred, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <div
                key={cred.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setActiveModal(cred);
                }}
                className={`group relative flex cursor-pointer flex-col justify-between gap-4 border-b border-neutral-800/80 pb-6 transition-all duration-200 hover:border-neutral-700 md:flex-row md:items-center ${
                  isSelected ? "border-neutral-600" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-12 min-w-12 shrink-0 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/90 p-2">
                    <Image
                      src={cred.logo}
                      width={40}
                      height={40}
                      alt={cred.issuer}
                      className="size-full object-contain"
                    />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-[18px] font-bold leading-snug text-white transition-colors group-hover:text-blue-300 md:text-[20px]">
                        {cred.title}
                      </p>
                      {cred.verificationUrl && (
                        <span className="inline-flex items-center rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-sm font-medium leading-relaxed text-[#888] md:text-[14px]">
                      {cred.issuer} · {cred.description}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-4 md:text-right">
                  <span className="text-sm font-medium text-[#777]">
                    .{cred.date}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                      setActiveModal(cred);
                    }}
                    className="flex size-8 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-neutral-400 transition-colors hover:border-neutral-600 hover:text-white"
                    title="Inspect certificate document"
                  >
                    <Maximize2 className="size-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Clean Full-Screen / On-Site Modal */}
      <AnimatePresence>
        {activeModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-[1000px] flex-col overflow-hidden rounded-lg border border-neutral-800 bg-black"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
                <div>
                  <h4 className="text-base font-bold text-white md:text-lg">
                    {activeModal.title}
                  </h4>
                  <p className="text-xs text-[#888]">
                    {activeModal.issuer} · {activeModal.date}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {activeModal.verificationUrl && (
                    <a
                      href={activeModal.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 sm:flex"
                    >
                      <span>Verify Online</span>
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    aria-label="Close modal"
                    className="flex size-8 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-neutral-400 transition-colors hover:text-white"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>

              {/* Modal Content - Preview Image */}
              <div className="relative flex max-h-[75vh] min-h-[350px] w-full items-center justify-center overflow-auto bg-black p-4">
                <div className="relative h-[65vh] w-full">
                  <Image
                    src={activeModal.image}
                    alt={activeModal.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-800 bg-black px-6 py-3">
                <div className="flex items-center gap-4">
                  {activeModal.pdfUrl && (
                    <a
                      href={activeModal.pdfUrl}
                      download
                      className="text-xs font-semibold text-white underline hover:text-emerald-400"
                    >
                      Download Original PDF
                    </a>
                  )}
                  {activeModal.verificationUrl && (
                    <a
                      href={activeModal.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-400 underline hover:text-emerald-300"
                    >
                      Official Verification Link ↗
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="rounded-md border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-xs font-semibold text-white hover:bg-neutral-800"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
