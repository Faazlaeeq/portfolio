import { getNextProject, getProject } from "../../../../../sanity/sanity-utils";
import Image from "next/image";
import GradientTxt from "@/app/components/Reusables/GradientTxt";
import gradientBG from "../../../../../public/gradient_bg.png";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { toast } from "react-toastify";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGooglePlay, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
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
    <div className="flex justify-center gap-16 mt-10">
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-seagreen-500 h-auto w-50">
          <FontAwesomeIcon icon={faGithub} color="#ffffff" className="size-7" />
          <span>GitHub</span>
        </a>
      )}
      {playStore && (
        <a href={playStore} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-seagreen-500 h-auto w-50">
          <FontAwesomeIcon icon={faGooglePlay} color="#ffffff" className="size-7" />
          <span>Google Play Store</span>
        </a>
      )}
      {liveUrl && (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-seagreen-500 h-auto w-50">
          <FontAwesomeIcon icon={faExternalLinkAlt} color="#ffffff" className="size-7" />
          <span>Live URL</span>
        </a>
      )}
      {appStore && (
        <a href={appStore} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-seagreen-500 h-auto w-50">
          <FontAwesomeIcon icon={faAppStoreIos} color="#ffffff" className="size-7" />
          <span>App Store</span>
        </a>
      )}
    </div>
  );
};

// // Usage in your component
// const ProjectPage = ({ project, data }) => {
//   return (
//     <div>
//       {/* Other content */}
//       <div className="prose prose-lg prose-blue mx-auto max-w-[800px] pt-[100px] xl:prose-xl lg:pt-[160px]">
//         <PortableText value={project?.content} />
//       </div>

//       <ProjectLinks
//         github={project?.github}
//         playStore={project?.playStore}
//         liveUrl={project?.liveUrl}
//         appStore={project?.appStore}
//       />

//       {data?.nextProject && (
//         <Link href={`/projects/${data?.nextProject.slug}`}>
//           <div className="flex justify-center">
//             <div className="group mx-auto mt-10 inline-flex cursor-pointer items-center justify-center gap-3">
//               {/* Next project link content */}
//             </div>
//           </div>
//         </Link>
//       )}
//     </div>
//   );
// };

// export default ProjectPage;
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


  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
  const SLIDES = images.map(image => (<Image src={image.url} alt="d" key="d" className="object-fill" width={1200}
    height={800}></Image>))

  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  )

  // return (
  //   <EmblaCarousel slides={images.map(image => (<Image src={image.url} alt="d" key="d" width={1200} height={800}></Image>))}>

  //   </EmblaCarousel>


  // );
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
          {/* <Image
            src={project.images[0]?.url}
            alt={project.images[0].alt || 'project image'}
            className="w-full h-auto"
            width={1200}
            height={800}
          /> */}
          <ProjectSlider images={project.images} />

          {/* <Image
            src={gradientBG}
            alt="gradient background"
            priority
            className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          /> */}
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
            <div
              className="flex justify-center"
            // onClick={handleNextProjectNavigation}
            >
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
