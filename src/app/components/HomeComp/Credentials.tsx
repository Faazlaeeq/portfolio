"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import GradientTxt from "../Reusables/GradientTxt";
import {
  Award,
  CheckCircle2,
  X,
  Maximize2,
  Building,
  Calendar,
  Eye,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Film,
} from "lucide-react";

interface DocumentCredential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  grade?: string;
  description: string;
  badge: string;
  image: string;
  pdfUrl?: string;
  verificationUrl?: string;
  tags: string[];
}

interface AdditionalCertification {
  title: string;
  issuer: string;
  year?: string;
  status: string;
  tags: string[];
}

export default function Credentials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeModal, setActiveModal] = useState<{
    id: string;
    title: string;
    issuer: string;
    image: string;
    pdfUrl?: string;
    verificationUrl?: string;
  } | null>(null);

  const filmstripRef = useRef<HTMLDivElement>(null);

  const documentCredentials: DocumentCredential[] = [
    {
      id: "udacity-aws-agent",
      title: "Future AWS Agent Engineer",
      issuer: "Udacity (Part of Accenture)",
      date: "October 2026",
      grade: "Nanodegree Program Completion",
      description:
        "Verified Nanodegree credential certifying expertise in designing, building, and deploying autonomous AI agents on AWS, foundation models, agentic workflows, memory systems, and multi-agent systems.",
      badge: "Agentic AI Nanodegree",
      image: "/credentials/udacity-future-aws-agent-engineer-nanodegree.png",
      pdfUrl: "/credentials/udacity-future-aws-agent-engineer-nanodegree.pdf",
      verificationUrl:
        "https://www.udacity.com/certificate/e/c0d36cd2-900d-11f1-925c-eff75458ddbc",
      tags: ["AWS Agentic AI", "Autonomous Agents", "Cloud Scale", "Udacity Nanodegree"],
    },
    {
      id: "maju-degree",
      title: "Associate Degree in Software Development",
      issuer: "Mohammad Ali Jinnah University (MAJU)",
      date: "October 2024",
      grade: "CGPA 3.88",
      description:
        "Official 2-year university degree covering Object-Oriented Programming, Data Structures & Algorithms, Relational Database Design, and Full-Stack Software Engineering.",
      badge: "Official Degree",
      image: "/credentials/maju-associate-degree-software-development.jpg",
      tags: ["Software Engineering", "OOP", "Database Design", "MAJU"],
    },
    {
      id: "aptech-diploma",
      title: "Advanced Diploma in Software Engineering",
      issuer: "Aptech Computer Education",
      date: "December 2022",
      grade: "Grade: Credit",
      description:
        "Comprehensive 3-year professional engineering diploma covering C#, .NET, Java, Object-Oriented Analysis, SQL Server, and Enterprise Web Development.",
      badge: "Professional Diploma",
      image: "/credentials/aptech-advanced-diploma-software-engineering.jpg",
      tags: ["C# & .NET", "Java", "SQL Server", "OOP", "Aptech"],
    },
    {
      id: "udacity-aws-ai",
      title: "AWS AI Practitioner Challenge",
      issuer: "Udacity (Part of Accenture)",
      date: "June 2026",
      grade: "Verified Completion",
      description:
        "Official credential verifying hands-on competence in AWS Artificial Intelligence, cloud fundamentals, generative AI architectures, and applied machine learning.",
      badge: "Cloud & AI Verified",
      image: "/credentials/udacity-aws-ai-practitioner-certificate.png",
      pdfUrl: "/credentials/udacity-aws-ai-practitioner-certificate.pdf",
      verificationUrl:
        "https://www.udacity.com/certificate/e/9fd0fdf6-340a-11f1-8447-d7f20d8c41a3",
      tags: ["AWS AI", "Cloud Architecture", "Generative AI", "Udacity"],
    },
    {
      id: "hackerrank-sql",
      title: "SQL (Intermediate) Certificate",
      issuer: "HackerRank",
      date: "February 2024",
      grade: "Cert ID: 78202DE73353",
      description:
        "Standardized skills assessment certifying proficiency in writing complex SQL queries, multi-table joins, subqueries, aggregations, and performance-tuned filtering.",
      badge: "Technical Skill Verified",
      image: "/credentials/hackerrank-sql-intermediate-certificate.png",
      pdfUrl: "/credentials/hackerrank-sql-intermediate-certificate.pdf",
      tags: ["T-SQL", "Complex Joins", "Aggregations", "HackerRank"],
    },
    {
      id: "udemy-flutter",
      title: "Flutter & Dart - The Complete Guide",
      issuer: "Udemy (Academind)",
      date: "February 2025",
      grade: "30 Total Hours",
      description:
        "Comprehensive cross-platform mobile development certification by Maximilian Schwarzmüller covering Dart, Flutter framework, state management (Bloc, Provider), REST APIs, and native device integration.",
      badge: "Mobile Dev Verified",
      image: "/credentials/udemy-flutter-dart-certificate.jpg",
      verificationUrl:
        "https://ude.my/UC-bb16454e-1959-4ff1-accf-958ea59db2ef",
      tags: ["Flutter", "Dart", "Cross-Platform", "Bloc & REST"],
    },
    {
      id: "10pearls-cert",
      title: "10Pearls Shine Internship — Data Sciences",
      issuer: "10Pearls (Pvt) Ltd.",
      date: "2026",
      grade: "Certificate of Completion",
      description:
        "Intensive virtual industry internship program in Data Sciences, exploring machine learning models, data exploration, validation, and real-world analytics.",
      badge: "Industry Certificate",
      image: "/credentials/10pearls-certificate-photo.jpg",
      pdfUrl: "/credentials/Ahmed_Faaz_Laeeq_certificate.pdf",
      tags: ["Data Science", "Python", "ML Pipelines", "10Pearls"],
    },
  ];

  const additionalCerts: AdditionalCertification[] = [
    {
      title: "Multi-Agent Systems with CrewAI",
      issuer: "DeepLearning.AI",
      status: "Certified",
      tags: ["Autonomous Agents", "CrewAI", "LangChain", "LLMs"],
    },
    {
      title: "Future AWS Agent Engineer Nanodegree",
      issuer: "Udacity",
      status: "Nanodegree (In Progress)",
      tags: ["AWS Bedrock", "Lambda", "API Gateway", "S3 Vector Store"],
    },
    {
      title: "Blockchain Specialization",
      issuer: "NED University of Engineering & Technology",
      status: "Post-Grad Specialization",
      tags: ["Distributed Ledgers", "Smart Contracts", "Cryptography"],
    },
    {
      title: "SAP Analytics Cloud (SAC) Reporting & Dashboards",
      issuer: "SAP / Course Certification",
      status: "Completed Course",
      tags: ["SAC", "BI Reporting", "KPI Dashboards", "Analytics"],
    },
  ];

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      } else if (!activeModal) {
        if (e.key === "ArrowLeft") {
          setCurrentSlide((prev) =>
            prev === 0 ? documentCredentials.length - 1 : prev - 1
          );
        } else if (e.key === "ArrowRight") {
          setCurrentSlide((prev) =>
            prev === documentCredentials.length - 1 ? 0 : prev + 1
          );
        }
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
  }, [activeModal, documentCredentials.length]);

  const activeCred = documentCredentials[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % documentCredentials.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + documentCredentials.length) % documentCredentials.length
    );
  };

  const openDocumentModal = (cred: DocumentCredential) => {
    setActiveModal({
      id: cred.id,
      title: cred.title,
      issuer: cred.issuer,
      image: cred.image,
      pdfUrl: cred.pdfUrl,
      verificationUrl: cred.verificationUrl,
    });
  };

  return (
    <section id="credentials" className="w-full py-2 lg:py-4">
      {/* Section Header */}
      <div>
        <GradientTxt
          tagName="h5"
          txt="CREDENTIALS & DEGREES"
          className="mb-4 text-[22px] font-bold tracking-[4px]"
        />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-[36px] font-bold leading-[110%] tracking-[0.5px] md:text-[50px] xl:text-[54px]">
            Verified Degrees & Certifications
          </h2>

          {/* Slide Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-widest text-neutral-400">
              {String(currentSlide + 1).padStart(2, "0")} /{" "}
              {String(documentCredentials.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              className="flex size-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 transition-colors hover:border-neutral-600 hover:bg-neutral-800 hover:text-white"
              aria-label="Previous credential"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex size-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 transition-colors hover:border-neutral-600 hover:bg-neutral-800 hover:text-white"
              aria-label="Next credential"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <p className="mt-3 max-w-[700px] text-[18px] text-[#888] md:text-[20px]">
          Formal academic degrees, industry certifications, and verified credentials
          validating my software engineering, cloud AI, and database expertise.
        </p>
      </div>

      {/* Featured Active Slideshow Display Card */}
      <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 p-6 md:p-10 shadow-2xl transition-all duration-300">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Certificate Visual Preview */}
          <div
            className="group relative aspect-[16/11] w-full cursor-pointer overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 lg:col-span-7"
            onClick={() => openDocumentModal(activeCred)}
          >
            <Image
              src={activeCred.image}
              alt={activeCred.title}
              fill
              className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-sm border border-neutral-700">
                <Eye className="size-4 text-emerald-400" />
                View Full Document On Site
              </span>
            </div>
            <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-emerald-950/80 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-800 backdrop-blur-sm">
              <CheckCircle2 className="size-3.5" />
              {activeCred.badge}
            </div>
          </div>

          {/* Certificate Information Panel */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-neutral-900 px-3 py-1 text-xs font-semibold text-neutral-300 border border-neutral-800">
                  Credential {currentSlide + 1} of {documentCredentials.length}
                </span>
                {activeCred.grade && (
                  <span className="rounded-md bg-blue-950/60 px-2.5 py-1 text-xs font-semibold text-blue-300 border border-blue-900/50">
                    {activeCred.grade}
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                {activeCred.title}
              </h3>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-400">
                <span className="flex items-center gap-1.5 font-medium text-neutral-200">
                  <Building className="size-4 text-blue-400" />
                  {activeCred.issuer}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-4 text-neutral-500" />
                  {activeCred.date}
                </span>
              </div>

              <p className="mt-5 text-base leading-relaxed text-[#999]">
                {activeCred.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {activeCred.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-400 border border-neutral-800/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-neutral-900 pt-6">
              <button
                type="button"
                onClick={() => openDocumentModal(activeCred)}
                className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors shadow-lg shadow-blue-600/20"
              >
                <Maximize2 className="size-4" />
                View Full Document
              </button>

              {activeCred.verificationUrl && (
                <a
                  href={activeCred.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 px-4 py-2.5 text-sm font-semibold text-emerald-400 transition-colors"
                >
                  Verify Online <ExternalLink className="size-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Film Strip of All Thumbnails */}
      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-400 uppercase">
            <Film className="size-4 text-blue-400" />
            Credentials Film Strip — Click Any to Inspect
          </span>
          <span className="text-xs text-neutral-500">
            Use arrow keys or click thumbnail
          </span>
        </div>

        <div
          ref={filmstripRef}
          className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-thin scrollbar-thumb-neutral-800"
        >
          {documentCredentials.map((cred, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={cred.id}
                onClick={() => setCurrentSlide(index)}
                className={`group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "w-[240px] border-blue-500 bg-neutral-900 shadow-[0_0_25px_rgba(59,130,246,0.25)] ring-2 ring-blue-500/50"
                    : "w-[180px] border-neutral-800/80 bg-neutral-950 opacity-60 hover:border-neutral-700 hover:opacity-100"
                }`}
              >
                {/* Filmstrip Thumbnail Image */}
                <div className="relative aspect-[16/10] w-full bg-neutral-900">
                  <Image
                    src={cred.image}
                    alt={cred.title}
                    fill
                    className="object-contain p-2"
                    sizes="240px"
                  />
                  {isActive && (
                    <div className="absolute top-2 left-2 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white shadow">
                      Active
                    </div>
                  )}
                </div>

                {/* Filmstrip Caption */}
                <div className="p-3">
                  <h4 className="truncate text-xs font-bold text-neutral-200">
                    {cred.title}
                  </h4>
                  <p className="mt-1 truncate text-[11px] text-neutral-500">
                    {cred.issuer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Professional Certifications Grid */}
      <div className="mt-16">
        <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-white">
          <Award className="size-6 text-yellow-400" />
          Additional Certifications & Specializations
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {additionalCerts.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border border-neutral-800/80 bg-neutral-950 p-5 transition-all duration-200 hover:border-neutral-700"
            >
              <div>
                <h4 className="text-base font-bold text-neutral-100">
                  {cert.title}
                </h4>

                <div className="mt-2 flex items-center gap-2 text-xs text-neutral-400">
                  <span className="font-medium text-neutral-300">{cert.issuer}</span>
                  {cert.year && <span>• {cert.year}</span>}
                </div>

                <div className="mt-3">
                  <span className="inline-block rounded-md bg-blue-950/60 px-2 py-0.5 text-xs font-medium text-blue-300 border border-blue-900/50">
                    {cert.status}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-neutral-900">
                {cert.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-neutral-900 px-2 py-0.5 text-[11px] text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* On-Site Full Document Modal (No Download / No New Tab) */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4 md:p-6 backdrop-blur-md"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/80">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activeModal.title}
                </h3>
                <p className="text-xs text-neutral-400">{activeModal.issuer}</p>
              </div>

              <div className="flex items-center gap-3">
                {activeModal.verificationUrl && (
                  <a
                    href={activeModal.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800 px-3 py-1.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-900 transition-colors"
                  >
                    Verify Online <ExternalLink className="size-3" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="rounded-full bg-neutral-800 p-2 text-neutral-300 transition-colors hover:bg-neutral-700 hover:text-white"
                  aria-label="Close modal"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Modal Document Body - Shown Directly On Site */}
            <div className="relative flex-1 overflow-auto bg-neutral-900/40 p-2 sm:p-4 flex items-center justify-center">
              {activeModal.pdfUrl ? (
                <iframe
                  src={`${activeModal.pdfUrl}#toolbar=0&navpanes=0`}
                  title={activeModal.title}
                  className="h-full w-full rounded-lg border border-neutral-800 bg-white"
                />
              ) : (
                <div className="relative flex h-full w-full items-center justify-center p-2">
                  <Image
                    src={activeModal.image}
                    alt={activeModal.title}
                    fill
                    className="rounded-lg object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
