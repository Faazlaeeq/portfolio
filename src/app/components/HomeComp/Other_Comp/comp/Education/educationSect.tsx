"use client";

import { useEffect, useState } from "react";
import EduSect from "./comp/EduSect";
import { Education, Work } from "../../../../../../../types/Experience";
import { getExperiences } from "../../../../../../../sanity/sanity-utils";
import { toast } from "react-toastify";

export default function EducationSect({
  initialExperiences,
}: {
  initialExperiences?: { education: Education[]; work: Work[] };
}) {
  const [education, setEducation] = useState<Education[]>(
    initialExperiences?.education || [],
  );
  const [work, setWork] = useState<Work[]>(initialExperiences?.work || []);

  useEffect(() => {
    if (
      initialExperiences &&
      (initialExperiences.education.length > 0 ||
        initialExperiences.work.length > 0)
    ) {
      return;
    }

    const getProperties = async function () {
      try {
        const { education, work } = await getExperiences();
        setEducation(education);
        setWork(work);
      } catch (error) {
        toast.error("Error fetching experiences, Please try again later!");
      }
    };

    getProperties();
  }, [initialExperiences]);

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
          {education.map((edu) => (
            <EduSect
              key={edu._id}
              type={edu.type}
              name={edu.title}
              title={edu.description}
              date={edu.year}
            />
          ))}
        </div>
      </div>

      <div className="xl:w-1/2">
        <div className="mb-10 text-[27px] font-bold md:text-[36px]">
          💼 Work Experience
        </div>

        <div className="flex flex-col gap-10">
          {work.map((w) => (
            <EduSect
              key={w._id}
              type={w.type}
              name={w.title}
              title={w.description}
              date={w.year}
              img={w.icon}
              alt={w.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
