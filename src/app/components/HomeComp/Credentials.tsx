"use client";

import { useState, useEffect } from "react";
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
  const [activeModal, setActiveModal] = useState<{
    id: string;
    title: string;
    issuer: string;
    image: string;
    pdfUrl?: string;
  } | null>(null);

  // Close modal on Escape key press and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeModal]);

  const documentCredentials: DocumentCredential[] = [
    {
      id: "maju-degree",
      title: "Associate Degree in Software Development",
      issuer: "Mohammad Ali Jinnah University (MAJU)",
      date: "October 2024",
      grade: "CGPA 3.88",
      description:
        "Official 2-year university degree covering Object-Oriented Programming, Data Structures & Algorithms, Relational Databases, and Full-Stack Software Engineering.",
      badge: "Official Degree",
      image: "/credentials/maju-associate-degree-software-development.jpg",
      tags: ["Software Engineering", "OOP", "Database Design", "MAJU"],
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
      title: "HackerRank SQL Developer (Basic & Intermediate)",
      issuer: "HackerRank",
      status: "Certified",
      tags: ["T-SQL", "Complex Joins", "Aggregations", "Schema Design"],
    },
    {
      title: "Multi-Agent Systems with CrewAI",
      issuer: "DeepLearning.AI",
      status: "Certified",
      tags: ["Autonomous Agents", "CrewAI", "LangChain", "LLMs"],
    },
    {
      title: "AWS Certified AI Agent Developer / Agent Engineer",
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
      title: "Diploma in Software Engineering (ACCP)",
      issuer: "Aptech Computer Education",
      year: "2019 – 2022",
      status: "Completed (3-Year)",
      tags: ["C#", ".NET", "Java", "SQL Server", "Web Fundamentals"],
    },
    {
      title: "Flutter & Dart Mobile Developer",
      issuer: "Udemy",
      status: "Certified",
      tags: ["Cross-Platform", "Bloc & GetX", "Firebase", "REST APIs"],
    },
  ];

  const openDocumentModal = (cred: DocumentCredential) => {
    setActiveModal({
      id: cred.id,
      title: cred.title,
      issuer: cred.issuer,
      image: cred.image,
      pdfUrl: cred.pdfUrl,
    });
  };

  return (
    <section id="credentials" className="mt-[120px]">
      {/* Section Header */}
      <div>
        <GradientTxt
          tagName="h5"
          txt="CREDENTIALS & DEGREES"
          className="mb-4 text-[22px] font-bold tracking-[4px]"
        />
        <h2 className="mb-4 text-[36px] font-bold leading-[110%] tracking-[0.5px] md:text-[50px] xl:text-[54px]">
          Verified Degrees & Certifications
        </h2>
        <p className="max-w-[700px] text-[18px] text-[#888] md:text-[20px]">
          Formal academic degrees and industry-recognized certifications
          validating my software development, data science, and AI systems background.
        </p>
      </div>

      {/* Featured Verified Credentials */}
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {documentCredentials.map((cred) => (
          <div
            key={cred.id}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition-all duration-300 hover:border-neutral-600 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div>
              {/* Image Preview with on-site modal trigger */}
              <div
                className="relative aspect-[16/11] w-full cursor-pointer overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800"
                onClick={() => openDocumentModal(cred)}
              >
                <Image
                  src={cred.image}
                  alt={cred.title}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm border border-neutral-700">
                    <Eye className="size-4 text-emerald-400" />
                    View Full Document On Site
                  </span>
                </div>
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-emerald-950/80 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-800 backdrop-blur-sm">
                  <CheckCircle2 className="size-3.5" />
                  {cred.badge}
                </div>
              </div>

              {/* Document Details */}
              <div className="mt-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {cred.title}
                  </h3>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-neutral-400">
                  <span className="flex items-center gap-1.5 font-medium text-neutral-300">
                    <Building className="size-4 text-blue-400" />
                    {cred.issuer}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-4 text-neutral-500" />
                    {cred.date}
                  </span>
                  {cred.grade && (
                    <span className="rounded-md bg-neutral-800 px-2.5 py-0.5 text-xs font-semibold text-neutral-200">
                      {cred.grade}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-base leading-relaxed text-[#888]">
                  {cred.description}
                </p>
              </div>
            </div>

            {/* Tags & On-Site Action */}
            <div className="mt-6 pt-4 border-t border-neutral-900">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {cred.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => openDocumentModal(cred)}
                  className="flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Full Document <Maximize2 className="size-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Professional Certifications Grid */}
      <div className="mt-16">
        <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-white">
          <Award className="size-6 text-yellow-400" />
          Industry Certifications & Accreditations
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {additionalCerts.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border border-neutral-800/80 bg-neutral-950 p-5 transition-all duration-200 hover:border-neutral-700"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-base font-bold text-neutral-100">
                    {cert.title}
                  </h4>
                </div>

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

              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="rounded-full bg-neutral-800 p-2 text-neutral-300 transition-colors hover:bg-neutral-700 hover:text-white"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>
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
