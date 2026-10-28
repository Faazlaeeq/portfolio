"use client";

import EduSect from "./comp/EduSect";
import { Education, Work } from "../../../../../../../types/Experience";

interface VerifiedEntry {
  _id: string;
  name: string;
  title: string;
  date: string;
  type: "edu" | "work";
}

const VERIFIED_EDUCATION: VerifiedEntry[] = [
  {
    _id: "bs-fintech",
    name: "BS in Financial Technology (FinTech)",
    title:
      "Mohammad Ali Jinnah University (MAJU) · Final Semester (CGPA: 3.87 / 4.00, Dean's Honor Roll)",
    date: "2024 – 2026",
    type: "edu",
  },
  {
    _id: "ad-software",
    name: "Associate Degree in Software Development",
    title:
      "Mohammad Ali Jinnah University (MAJU) · Graduated Magna Cum Laude (CGPA: 3.88 / 4.00)",
    date: "2022 – 2024",
    type: "edu",
  },
  {
    _id: "adse-aptech",
    name: "Advanced Diploma in Software Engineering",
    title:
      "Aptech Computer Education · Enterprise application architecture, algorithms, relational databases & C#",
    date: "2019 – 2022",
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
    type: "work",
  },
  {
    _id: "freelance-swe",
    name: "Freelance Software Engineer (Full-Stack & AI)",
    title:
      "Upwork & Fiverr · 10+ client projects delivered with 100% 5.0 rating; engineered custom desktop software (C#, .NET, SQL Server) for local gold refining lab, web applications & AI integrations.",
    date: "2022 – Present",
    type: "work",
  },
  {
    _id: "10pearls-shine",
    name: "Data Science Virtual Intern",
    title:
      "10Pearls Shine · Exploratory data analysis, feature engineering, and predictive modeling using Python, Pandas, and Scikit-Learn.",
    date: "Oct 2024",
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
      className="mt-[120px] flex flex-col justify-between gap-16 xl:flex-row xl:gap-10"
    >
      <div className="xl:w-1/2">
        <div className="mb-10 text-[27px] font-bold md:text-[36px]">
          📚 Education
        </div>

        <div className="flex flex-col gap-10">
          {VERIFIED_EDUCATION.map((edu) => (
            <EduSect
              key={edu._id}
              type={edu.type}
              name={edu.name}
              title={edu.title}
              date={edu.date}
            />
          ))}
        </div>
      </div>

      <div className="xl:w-1/2">
        <div className="mb-10 text-[27px] font-bold md:text-[36px]">
          💼 Work Experience
        </div>

        <div className="flex flex-col gap-10">
          {VERIFIED_WORK.map((w) => (
            <EduSect
              key={w._id}
              type={w.type}
              name={w.name}
              title={w.title}
              date={w.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
