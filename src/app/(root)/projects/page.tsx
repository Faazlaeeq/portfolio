import { Project } from "../../../../types/Project";
import { Metadata } from "next";
import { ProjectSkeleton } from "./projectSkeleton";
import Image from "next/image";
import GradientTxt from "@/app/components/Reusables/GradientTxt";
import CustomNav from "@/app/components/Reusables/CustomNav";
import { getProjects } from "../../../../sanity/sanity-utils";
import Link from "next/link";
import { toast } from "react-toastify";
import gradientBG from "../../../../public/gradient_bg.png";
import React from "react";


export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of projects, ranging from web development and programming to personal growth and industry trends. Stay informed and inspired with my latest work.",
  openGraph: {
    description:
      "Explore my portfolio of projects, ranging from web development and programming to personal growth and industry trends. Stay informed and inspired with my latest work.",
  },
};

export const revalidate = 3600;

export default async function Projects() {
  const projects: Project[] = await getProjects();

  if (!projects)
    toast.error("Error fetching projects, please try again later!");

  return (
    <section>
      <div className="container mx-auto grid gap-40 px-5 pt-20 lg:px-20 xl:gap-20">
        {!projects.length ? (
          <ProjectSkeleton />
        ) : (
          projects.map((project) => (
            <Link key={project._id} href={`/projects/${project.slug}`}>
              <div className="group relative flex max-w-[600px] cursor-pointer items-center justify-end xl:ml-40">
                <div className="overflow-hidden">
                  {project.images && project.images.length > 0 ? <Image
                    src={project.images[0].url}
                    alt={project.images[0].alt}
                    width={400}
                    height={560}
                    priority
                    className="w-full transition-transform duration-300 group-hover:scale-[1.1]"
                  /> : <Image
                    src={gradientBG}
                    alt={project.images[0].alt}
                    width={400}
                    height={560}
                    priority
                    className="w-full transition-transform duration-300 group-hover:scale-[1.1]"
                  />}
                </div>
                <div className="absolute -bottom-16 -right-2 w-[90%] bg-black px-6 py-6 md:-right-[150px] md:py-14 xl:-right-[400px] xl:bottom-20 xl:w-full">
                  <div className="flex flex-wrap justify-between">
                    <GradientTxt
                      tagName="h6"
                      txt={project.slug === "jewelery-register" ? "Custom Gold Refining Lab Software" : project.tagline}
                      className="text-[13px] font-bold tracking-[4px] md:text-sm xl:text-lg"
                    />
                    <div className="flex flex-wrap gap-4 justify-end">
                      {project.techStack.map((tech, index) => {
                        const isLastElement = index === project.techStack.length - 1;
                        return (
                          <React.Fragment key={tech._id}>
                            <div className="flex items-center gap-2 text-sm" key={tech._id}>
                              {tech.logoUrl && (
                                <Image src={tech.logoUrl} alt={tech.technology} className="h-4 w-auto" width={32} height={32} />
                              )}
                            </div>
                            {/* {!isLastElement && <span key={`separator-${tech._id}`}>•</span>} */}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <h2 className="my-2 truncate text-xl font-bold leading-[150%] text-white md:my-8 md:text-[50px] xl:text-[54px]">
                    {project.title}
                  </h2>
                  <CustomNav
                    txt="View Project"
                    className="flex items-center gap-2 text-sm text-white md:text-lg"
                  />
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
