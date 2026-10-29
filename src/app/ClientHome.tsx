"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/HomeComp/Projects/Projects";
import AnimatedSlide from "./components/HomeComp/Projects/Swiper";
import TechStacks from "./components/TechStacks";
import {
  WorkExperienceSect,
  EducationSect,
} from "./components/HomeComp/Other_Comp/comp/Education/educationSect";
import Credentials from "./components/HomeComp/Credentials";
import Testimonials from "./components/HomeComp/Other_Comp/comp/Testimonials";
import Footer from "./components/Footer/Footer";
import type { Project } from "../../types/Project";
import type { Technology } from "../../types/Technology";
import type { Testimonials as TestimonialsType } from "../../types/Testimonials";
import type { FAQ as FAQType } from "../../types/FAQ";

interface ClientHomeProps {
  initialProjects?: Project[];
  initialTechStacks?: Technology[];
  initialTestimonials?: TestimonialsType[];
  initialFaqs?: FAQType[];
  // Kept for backwards compatibility if passed from parent
  initialServices?: any[];
  initialArticles?: any[];
  initialExperiences?: any;
}

export default function ClientHome({
  initialProjects,
  initialTechStacks,
  initialTestimonials,
  initialFaqs,
}: ClientHomeProps) {
  return (
    <>
      <Header key="header" />
      <main key="main">
        {/* 1. Hero Section */}
        <div className="container mx-auto px-5 lg:px-20">
          <Hero />
        </div>

        {/* 2. Projects Section */}
        <div className="container mx-auto px-5 pt-12 lg:px-20">
          <Projects />
        </div>
        <AnimatedSlide initialProjects={initialProjects} />

        {/* Tech Stacks Marquee Divider */}
        <div className="py-6">
          <TechStacks initialTechStacks={initialTechStacks} />
        </div>

        {/* 3. Work Experience Section (Single Column) */}
        <div className="container mx-auto px-5 pt-12 lg:px-20">
          <WorkExperienceSect />
        </div>

        {/* 4. Certifications & Credentials Section (Pure Black Background) */}
        <Credentials />

        {/* 5. Education Section (Single Column) */}
        <div className="container mx-auto px-5 pt-12 lg:px-20">
          <EducationSect />
        </div>

        {/* 6. Testimonials Section */}
        <div className="container mx-auto px-5 py-16 lg:px-20">
          <Testimonials initialTestimonials={initialTestimonials} />
        </div>
      </main>
      <Footer key="footer" initialFaqs={initialFaqs} />
    </>
  );
}
