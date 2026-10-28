import Image from "next/image";
import FadeUp from "@/animations/FadeUp";

interface EduSectProps {
  type: "edu" | "work";
  name: string;
  title: string;
  date: string;
  img?: string;
  images?: string[];
  alt?: string;
}

export default function EduSect({
  type,
  name,
  title,
  date,
  img,
  images,
  alt,
}: EduSectProps) {
  return (
    <FadeUp
      tag="div"
      className="group relative flex cursor-pointer flex-col justify-between gap-4 border-b border-neutral-800/80 pb-8 transition-colors duration-200 hover:border-neutral-700 md:flex-row md:items-center"
    >
      <div className="flex items-center gap-4">
        {images && images.length > 1 ? (
          <div className="flex shrink-0 items-center -space-x-2">
            {images.map((src, i) => (
              <div
                key={i}
                className="flex size-11 min-w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/90 p-2 shadow-sm"
              >
                <Image
                  src={src}
                  width={36}
                  height={36}
                  alt={alt || name}
                  className="size-full object-contain"
                />
              </div>
            ))}
          </div>
        ) : img ? (
          <div className="flex size-12 min-w-12 shrink-0 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/90 p-2">
            <Image
              src={img}
              width={40}
              height={40}
              alt={alt || name}
              className="size-full object-contain"
            />
          </div>
        ) : null}

        <div>
          <p className="mb-1 text-[18px] font-bold leading-snug text-white transition-colors group-hover:text-blue-300 md:text-[21px]">
            {name}
          </p>
          <p className="text-sm font-medium leading-relaxed text-[#888] md:text-[15px]">
            {title}
          </p>
        </div>
      </div>

      <div className="shrink-0 md:text-right">
        <span className="text-sm font-medium text-[#777]">
          .{date}
        </span>
      </div>
    </FadeUp>
  );
}
