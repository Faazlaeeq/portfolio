import FadeUp from "@/animations/FadeUp";
import CustomBtn from "../../Reusables/CustomBtn";
import GradientTxt from "../../Reusables/GradientTxt";

export default function Projects() {
  return (
    <section className="mb-6">
      <FadeUp
        tag="div"
        className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
      >
        <div>
          <GradientTxt
            tagName="h6"
            txt="PORTFOLIO & CASE STUDIES"
            className="mb-3 text-[16px] font-bold tracking-[3px] md:text-[20px]"
          />
          <h2 className="max-w-[700px] text-[34px] font-bold leading-[115%] tracking-[0.5px] md:text-[48px]">
            Engineered systems & autonomous AI applications.
          </h2>
          <p className="mt-2 text-sm text-[#888] md:text-base">
            From multi-agent AI assistants to specialized desktop software for local gold refining operations.
          </p>
        </div>

        <CustomBtn
          txt="View all projects"
          className="w-[200px] shrink-0"
          href="/projects"
        />
      </FadeUp>
    </section>
  );
}
