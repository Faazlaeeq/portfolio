"use client";

import EduSect from "./comp/EduSect";
import { Education, Work } from "../../../../../../../types/Experience";
import GradientTxt from "../../../../Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";

interface VerifiedEntry {
  _id: string;
  name: string;
  title: string;
  date: string;
  badge?: string;
  img?: string;
  alt?: string;
  type: "edu" | "work";
}

const VERIFIED_EDUCATION: VerifiedEntry[] = [
  {
    _id: "bs-fintech",
    name: "BS in Financial Technology (FinTech)",
    title:
      "Mohammad Ali Jinnah University (MAJU) · Final Semester (CGPA: 3.87 / 4.00, Dean's Honor Roll)",
    date: "2024 – 2026",
    badge: "3.87 CGPA",
    type: "edu",
  },
  {
    _id: "ad-software",
    name: "Associate Degree in Software Development",
    title:
      "Mohammad Ali Jinnah University (MAJU) · Graduated Magna Cum Laude (CGPA: 3.88 / 4.00)",
    date: "2022 – 2024",
    badge: "3.88 CGPA",
    type: "edu",
  },
  {
    _id: "adse-aptech",
    name: "Advanced Diploma in Software Engineering",
    title:
      "Aptech Computer Education · Enterprise application architecture, algorithms, relational databases & C#",
    date: "2019 – 2022",
    badge: "3-Year Diploma",
    type: "edu",
  },
];

const VERIFIED_WORK: VerifiedEntry[] = [
  {
    _id: "rubikkube",
    name: "Mobile Application Developer (Remote)",
    title:
      "Rubikkube · Engineered cross-platform Flutter/Dart apps, Bloc state management, Firebase backend integration, push notifications & REST APIs.",
    date: "Jul 2024 – Apr 2025",
    badge: "Remote",
    type: "work",
  },
  {
    _id: "freelance-swe",
    name: "Freelance Software Engineer (Full-Stack & AI)",
    title:
      "Upwork & Fiverr · 10+ client projects delivered with 100% 5.0 rating; engineered custom desktop workflow software (C#, .NET, SQL Server) for local gold refining lab, web applications & AI integrations.",
    date: "2022 – Present",
    badge: "10+ Projects · 5.0 ★",
    type: "work",
  },
  {
    _id: "10pearls-shine",
    name: "Data Science Virtual Intern",
    title:
      "10Pearls Shine · Exploratory data analysis, feature engineering, and predictive modeling using Python, Pandas, and Scikit-Learn.",
    date: "Oct 2024",
    badge: "Data Science",
    type: "work",
  },
];

export default function EducationSect({
  initialExperiences,
}: {
  initialExperiences?: { education: Education[]; work: Work[] };
}) {
  return (
    <section
      id="experience"
      className="mt-[100px] mb-20"
    >
      <FadeUp tag="div" className="mb-14">
        <GradientTxt
          tagName="h6"
          txt="BACKGROUND & CAREER"
          className="mb-4 text-center text-[16px] font-bold tracking-[3px] md:text-[20px]"
        />
        <h2 className="mx-auto text-center text-[34px] font-bold leading-[115%] tracking-[0.5px] md:text-[50px]">
          Education & Work Experience
        </h2>
      </FadeUp>

      <div className="flex flex-col justify-between gap-16 xl:flex-row xl:gap-12">
        {/* Education Column */}
        <div className="xl:w-1/2">
          <div className="mb-8 flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <h3 className="text-[24px] font-bold md:text-[28px] text-white">
              Academic Qualifications
            </h3>
          </div>

          <div className="flex flex-col gap-8">
            {VERIFIED_EDUCATION.map((edu) => (
              <EduSect
                key={edu._id}
                type={edu.type}
                name={edu.name}
                title={edu.title}
                date={edu.date}
                badge={edu.badge}
              />
            ))}
          </div>
        </div>

        {/* Work Column */}
        <div className="xl:w-1/2">
          <div className="mb-8 flex items-center gap-3">
            <span className="text-2xl">💼</span>
            <h3 className="text-[24px] font-bold md:text-[28px] text-white">
              Work Experience
            </h3>
          </div>

          <div className="flex flex-col gap-8">
            {VERIFIED_WORK.map((w) => (
              <EduSect
                key={w._id}
                type={w.type}
                name={w.name}
                title={w.title}
                date={w.date}
                badge={w.badge}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
