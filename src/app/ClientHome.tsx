"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStacks from "./components/TechStacks";
import Credentials from "./components/HomeComp/Credentials";
import Services from "./components/HomeComp/Services";
import Projects from "./components/HomeComp/Projects/Projects";
import AnimatedSlide from "./components/HomeComp/Projects/Swiper";
import Articles from "./components/HomeComp/Articles";
import ProfileInfo from "./components/HomeComp/Other_Comp/comp/profileInfo";
import EducationSect from "./components/HomeComp/Other_Comp/comp/Education/educationSect";
import Testimonials from "./components/HomeComp/Other_Comp/comp/Testimonials";
import Footer from "./components/Footer/Footer";

import type { Services as ServicesType } from "../../types/Services";
import type { Project } from "../../types/Project";
import type { Technology } from "../../types/Technology";
import type { ArticleProps } from "../../types/Articles";
import type { Education, Work } from "../../types/Experience";
import type { Testimonials as TestimonialsType } from "../../types/Testimonials";
import type { FAQ as FAQType } from "../../types/FAQ";

interface ClientHomeProps {
  initialServices?: ServicesType[];
  initialProjects?: Project[];
  initialTechStacks?: Technology[];
  initialArticles?: ArticleProps[];
  initialExperiences?: { education: Education[]; work: Work[] };
  initialTestimonials?: TestimonialsType[];
  initialFaqs?: FAQType[];
}

export default function ClientHome({
  initialServices,
  initialProjects,
  initialTechStacks,
  initialArticles,
  initialExperiences,
  initialTestimonials,
  initialFaqs,
}: ClientHomeProps) {
  return (
    <>
      <Header key="header" />
      <main key="main" className="w-full">
        {/* ROW 1: Hero Section (Dark / Pure Black #000000) */}
        <div className="snap-section min-h-screen w-full flex flex-col justify-between bg-black relative">
          <div className="container mx-auto px-5 pt-8 lg:px-20">
            <Hero />
          </div>
          <div className="w-full pb-4">
            <TechStacks initialTechStacks={initialTechStacks} />
          </div>
        </div>

        {/* ROW 2: Academic & Certification Section - Appearing right after Hero (Lighter / Charcoal #111111) */}
        <div className="snap-section min-h-screen w-full flex flex-col justify-center bg-[#111111] relative">
          <div className="container mx-auto px-5 py-8 lg:px-20">
            <Credentials />
          </div>
        </div>

        {/* ROW 3: Services & Expertise Section (Dark / Pure Black #000000) */}
        <div className="snap-section min-h-screen w-full flex flex-col justify-center bg-black relative">
          <div className="container mx-auto px-5 py-8 lg:px-20">
            <Services initialServices={initialServices} />
          </div>
        </div>

        {/* ROW 4: Featured Projects & Showcase (Lighter / Charcoal #111111) */}
        <div className="snap-section min-h-screen w-full flex flex-col justify-center bg-[#111111] relative overflow-hidden">
          <div className="container mx-auto px-5 pt-6 lg:px-20">
            <Projects />
          </div>
          <div className="relative h-[360px] w-full">
            <AnimatedSlide initialProjects={initialProjects} />
          </div>
        </div>

        {/* ROW 5: Articles Section (Dark / Pure Black #000000) */}
        <div className="snap-section min-h-screen w-full flex flex-col justify-center bg-black relative">
          <Articles initialArticles={initialArticles} />
        </div>

        {/* ROW 6: About & Work History Section (Lighter / Charcoal #111111) */}
        <div className="snap-section min-h-screen w-full flex flex-col justify-center bg-[#111111] relative">
          <div className="container mx-auto px-5 py-8 lg:px-20">
            <ProfileInfo />
            <EducationSect initialExperiences={initialExperiences} />
          </div>
        </div>

        {/* ROW 7: Testimonials Section (Dark / Pure Black #000000) */}
        <div className="snap-section min-h-screen w-full flex flex-col justify-center bg-black relative">
          <div className="container mx-auto px-5 py-8 lg:px-20">
            <Testimonials initialTestimonials={initialTestimonials} />
          </div>
        </div>

        {/* ROW 8: Contact / Footer Section (Lighter / Charcoal #111111) */}
        <div className="snap-section min-h-screen w-full flex flex-col justify-center bg-[#111111] relative">
          <Footer initialFaqs={initialFaqs} />
        </div>
      </main>
    </>
  );
}
