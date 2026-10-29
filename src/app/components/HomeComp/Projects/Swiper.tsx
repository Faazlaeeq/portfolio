"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import GradientTxt from "../../Reusables/GradientTxt";
import CustomNav from "../../Reusables/CustomNav";
import type { Project } from "../../../../../types/Project";
import { useRouter } from "next/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { getProjects } from "../../../../../sanity/sanity-utils";
import { toast } from "react-toastify";

export default function AnimatedSlide({
  initialProjects = [],
}: {
  initialProjects?: Project[];
}) {
  const router = useRouter();
  const swiperRef = useRef<SwiperType | null>(null);
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  useEffect(() => {
    if (initialProjects && initialProjects.length > 0) return;

    const fetchProjects = async function () {
      try {
        const projects = await getProjects();
        setProjects(projects);
      } catch (error) {
        toast.error("Failed to fetch projects. Please try again later.");
      }
    };

    fetchProjects();
  }, [initialProjects]);

  const handleNavigation = function (slug: string) {
    router.push(`/projects/${slug}`);
  };

  return (
    <div className="relative w-full overflow-hidden pb-12 pt-4">
      <div className="w-full cursor-pointer">
        <Swiper
          key={projects.length}
          modules={[Autoplay, Navigation]}
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={24}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full px-5 lg:px-20"
        >
          {projects.length > 0 &&
            projects.map((project) => (
              <SwiperSlide
                key={project._id}
                className="group overflow-hidden rounded-xl border border-neutral-800 bg-[#0a0a0a] transition-all duration-300 hover:border-neutral-700"
                onClick={() => handleNavigation(project.slug)}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  {project.images && project.images[0] && (
                    <Image
                      src={project.images[0].url}
                      alt={project.images[0].alt || project.title}
                      fill
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-6 md:p-8">
                  <GradientTxt
                    txt={project.title}
                    className="text-[13px] font-bold tracking-[3px]"
                    tagName="h5"
                  />
                  <h4 className="my-4 truncate text-[18px] font-bold leading-snug text-white transition-opacity duration-300 group-hover:opacity-80">
                    {project.slug === "jewelery-register"
                      ? "Custom Gold Refining Lab Software"
                      : project.tagline}
                  </h4>
                  <CustomNav
                    txt="View Project"
                    className="flex items-center gap-2 text-[14px] text-neutral-400 transition-colors duration-300 group-hover:text-white"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Navigation arrows positioned in normal flow below the carousel */}
      <div className="container mx-auto mt-8 flex items-center justify-end gap-3 px-5 lg:px-20">
        <button
          type="button"
          aria-label="Previous project slide"
          className="flex size-12 cursor-pointer items-center justify-center rounded-lg border border-neutral-800 bg-[#0a0a0a] text-white transition-colors hover:border-neutral-600 hover:bg-neutral-900"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Next project slide"
          className="flex size-12 cursor-pointer items-center justify-center rounded-lg border border-neutral-800 bg-[#0a0a0a] text-white transition-colors hover:border-neutral-600 hover:bg-neutral-900"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
