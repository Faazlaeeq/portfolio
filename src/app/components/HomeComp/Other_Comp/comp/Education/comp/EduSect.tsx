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
      className="group relative flex flex-col justify-between gap-4 rounded-2xl border border-neutral-800/80 bg-neutral-950/70 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:bg-neutral-900/60 hover:shadow-2xl"
    >
      <div className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-blue-400 transition-colors group-hover:border-neutral-700 group-hover:text-emerald-400">
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

        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-[18px] font-bold leading-snug text-white transition-colors group-hover:text-blue-300 md:text-[20px]">
              {name}
            </h4>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-xs font-semibold text-neutral-400">
              {date}
            </span>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-[#888] md:text-[15px]">
            {title}
          </p>

          {badge && (
            <div className="mt-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-800/80 bg-emerald-950/40 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-400"></span>
                {badge}
              </span>
            </div>
          )}
        </div>
      </div>
    </FadeUp>
  );
}
