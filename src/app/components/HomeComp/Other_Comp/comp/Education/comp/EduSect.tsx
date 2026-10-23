import Image from "next/image";
import FadeUp from "@/animations/FadeUp";
import { Briefcase, GraduationCap, Building2 } from "lucide-react";

interface EduSectProps {
  type: "edu" | "work";
  name: string;
  title: string;
  date: string;
  img?: string;
  alt?: string;
  badge?: string;
}

export default function EduSect({
  type,
  name,
  title,
  date,
  img,
  alt,
  badge,
}: EduSectProps) {
  return (
    <FadeUp
      tag="div"
      className="group relative flex cursor-default flex-col justify-between gap-4 border-b border-neutral-800/80 pb-8 transition-colors duration-200 hover:border-neutral-700 xl:flex-row xl:items-start"
    >
      <div className="flex items-start gap-4">
        <div className="flex size-11 min-w-11 shrink-0 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-blue-400 transition-colors group-hover:border-neutral-700 group-hover:text-emerald-400">
          {img ? (
            <Image
              src={img}
              width={40}
              height={40}
              alt={alt || name}
              className="size-full rounded-xl object-contain p-1"
            />
          ) : type === "work" ? (
            <Briefcase className="size-5" />
          ) : (
            <GraduationCap className="size-5" />
          )}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-[18px] font-bold leading-snug text-white transition-colors group-hover:text-blue-300 md:text-[21px]">
              {name}
            </h4>
            {badge && (
              <span className="rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                {badge}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm leading-relaxed text-[#888] md:text-[15px]">
            {title}
          </p>
        </div>
      </div>

      <div className="shrink-0 xl:text-right">
        <span className="rounded-full border border-neutral-800/60 bg-neutral-900/60 px-3 py-1 text-xs font-semibold text-neutral-400">
          {date}
        </span>
      </div>
    </FadeUp>
  );
}
