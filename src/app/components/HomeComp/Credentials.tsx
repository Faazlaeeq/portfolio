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
}

const DOCUMENT_CREDENTIALS: DocumentCredential[] = [
  {
    id: "udacity-aws-agent",
    title: "Future AWS Agent Engineer",
    issuer: "Udacity (Part of Accenture)",
    date: "October 2026",
    image: "/credentials/udacity-future-aws-agent-engineer-nanodegree.png",
    pdfUrl: "/credentials/udacity-future-aws-agent-engineer-nanodegree.pdf",
    verificationUrl:
      "https://www.udacity.com/certificate/e/c0d36cd2-900d-11f1-925c-eff75458ddbc",
  },
  {
    id: "maju-degree",
    title: "Associate Degree in Software Development",
    issuer: "Mohammad Ali Jinnah University (MAJU)",
    date: "October 2024",
    image: "/credentials/maju-associate-degree-software-development.jpg",
  },
  {
    id: "aptech-diploma",
    title: "Advanced Diploma in Software Engineering",
    issuer: "Aptech Computer Education",
    date: "December 2022",
    image: "/credentials/aptech-advanced-diploma-software-engineering.jpg",
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
  },
  {
    id: "hackerrank-sql",
    title: "SQL (Intermediate) Certificate",
    issuer: "HackerRank",
    date: "February 2024",
    image: "/credentials/hackerrank-sql-intermediate-certificate.png",
    pdfUrl: "/credentials/hackerrank-sql-intermediate-certificate.pdf",
  },
  {
    id: "udemy-flutter",
    title: "Flutter & Dart - The Complete Guide",
    issuer: "Udemy (Academind)",
    date: "February 2025",
    image: "/credentials/udemy-flutter-dart-certificate.jpg",
    verificationUrl: "https://ude.my/UC-bb16454e-1959-4ff1-accf-958ea59db2ef",
  },
  {
    id: "10pearls-cert",
    title: "10Pearls Shine Internship — Data Sciences",
    issuer: "10Pearls (Pvt) Ltd.",
    date: "2026",
    image: "/credentials/10pearls-certificate-photo.jpg",
    pdfUrl: "/credentials/Ahmed_Faaz_Laeeq_certificate.pdf",
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

      {/* Centered Coverflow Slideshow with Peeked Previous and Next Slides */}
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

              {/* Modal Content: Full Document Display on site */}
              <div className="relative flex min-h-[400px] max-h-[78vh] w-full items-center justify-center overflow-auto bg-black p-4">
                {activeModal.pdfUrl ? (
                  <iframe
                    src={`${activeModal.pdfUrl}#toolbar=0&navpanes=0`}
                    title={activeModal.title}
                    className="h-[75vh] w-full rounded border border-neutral-800"
                  />
                ) : (
                  <div className="relative flex h-[75vh] w-full items-center justify-center">
                    <Image
                      src={activeModal.image}
                      alt={activeModal.title}
                      fill
                      className="object-contain"
                      sizes="1000px"
                      priority
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
