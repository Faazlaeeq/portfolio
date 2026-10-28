import { getNextProject, getProject } from "../../../../../sanity/sanity-utils";
import Image from "next/image";
import GradientTxt from "@/app/components/Reusables/GradientTxt";
import gradientBG from "../../../../../public/gradient_bg.png";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { toast } from "react-toastify";
import { ExternalLink } from "lucide-react";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import EmblaCarousel from "@/app/components/embala_carousel";
import { EmblaOptionsType } from "embla-carousel";

interface ProjectLinksProps {
  github?: string;
  playStore?: string;
  liveUrl?: string;
  appStore?: string;
}

const ProjectLinks = ({ github, playStore, liveUrl, appStore }: ProjectLinksProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-10">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <svg className="size-6 fill-current text-white" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          <span>GitHub</span>
        </a>
      )}
      {playStore && (
        <a
          href={playStore}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <svg className="size-6 fill-current text-white" viewBox="0 0 24 24">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a2.37 2.37 0 0 1-.61-.954V2.768c.175-.38.39-.705.609-.954zm11.235 11.238l2.585 2.585-11.89 6.864 9.305-9.449zm0-2.104L5.539 1.5l11.89 6.864-2.585 2.584zm1.485 1.485l4.318 2.493a1.442 1.442 0 0 1 0 2.148l-4.318 2.493-2.13-2.13 2.13-2.13z"/>
          </svg>
          <span>Google Play Store</span>
        </a>
      )}
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <ExternalLink className="size-6 text-white" />
          <span>Live URL</span>
        </a>
      )}
      {appStore && (
        <a
          href={appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <svg className="size-6 fill-current text-white" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.54c.66-.8 1.11-1.92.99-3.04-.95.04-2.1.63-2.79 1.43-.61.7-.1.14-1.84.99-3.04 1.06.08 2.15.7 2.8 1.41z"/>
          </svg>
          <span>App Store</span>
        </a>
      )}
    </div>
  );
};

export async function generateMetadata({ params }: Params) {
  const project = await getProject(params.slug);
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.images,
    },
  };
}

export interface Params {
  params: {
    slug: string;
  };
}

export const revalidate = 3600;

interface ImageType {
  url: string;
  alt?: string;
}

const ProjectSlider = ({ images }: { images: ImageType[] }) => {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const SLIDES = images.map((image, idx) => (
    <Image
      src={image.url}
      alt={image.alt || `Slide ${idx + 1}`}
      key={image.url || idx}
      className="object-fill"
      width={1200}
      height={800}
    />
  ));

  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
};

export default async function ProjectDetails({ params }: Params) {
  const project = await getProject(params.slug);
  const data = await getNextProject(params.slug);

  if (!project)
    toast.error("Error fetching project details, please try again later!");

  const isJewelery = params.slug === "jewelery-register";
  const displayTagline = isJewelery
    ? "Custom Gold Refining Lab Software"
    : project.tagline;
  const displayDescription = isJewelery
    ? "A custom desktop software engineered specifically for a local gold refining lab tailored to their specialized workflow, refining batch tracking, purity calculations, and inventory accounting (C#, .NET, WPF, MS SQL Server)."
    : project.description;

  return (
    <section>
      <div className="container mx-auto px-5 pt-5 lg:px-20">
        <div className="mb-20 mt-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <GradientTxt
              tagName="h6"
              txt={displayTagline}
              className="text-sm font-bold"
            />
            <h2 className="mt-3 text-[36px] font-bold leading-[120%] md:text-[50px] xl:text-[54px]">
              {project.title}
            </h2>
          </div>

          <div className="lg:max-w-[50%]">
            <div className="flex flex-wrap gap-4 justify-end">
              {project.techStack.map((tech, index) => {
                const isLastElement = index === project.techStack.length - 1;
                return (
                  <React.Fragment key={tech._id}>
                    <div className="flex items-center gap-2 text-sm">
                      {tech.logoUrl && (
                        <Image src={tech.logoUrl} alt={tech.technology} className="h-4 w-auto" width={32} height={32} />
                      )}
                      <span>{tech.technology}</span>
                    </div>
                    {!isLastElement && <span>•</span>}
                  </React.Fragment>
                );
              })}
            </div>
            <h4 className="mb-3 text-[19px] font-bold leading-[110%] md:text-2xl">
              Project Overview
            </h4>
            <p className="md:text-lg">{displayDescription}</p>
          </div>
        </div>
        <div className="relative group">
          <ProjectSlider images={project.images} />
        </div>
        <div className="prose prose-lg prose-blue mx-auto max-w-[800px] pt-[100px] xl:prose-xl lg:pt-[160px]">
          <PortableText value={project?.content} />
        </div>

        <ProjectLinks
          github={project?.githubUrl}
          playStore={project?.playstoreUrl}
          liveUrl={project?.liveUrl}
          appStore={project?.appstoreUrl}
        />
        {data?.nextProject && (
          <Link href={`/projects/${data?.nextProject.slug}`}>
            <div className="flex justify-center">
              <div className="group mx-auto mt-10 inline-flex cursor-pointer items-center justify-center gap-3 bg-gradient-to-r from-purple-400 via-red-500 to-orange-600 bg-clip-text pb-4 text-center text-[30px] font-bold leading-[110%] text-transparent md:text-[50px] xl:text-[54px]">
                <h2>Next Project</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="red"
                  className="bi bi-chevron-double-right transition-transform duration-300 group-hover:translate-x-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}
