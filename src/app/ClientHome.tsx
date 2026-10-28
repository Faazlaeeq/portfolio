"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStacks from "./components/TechStacks";
import Credentials from "./components/HomeComp/Credentials";
import EducationSect from "./components/HomeComp/Other_Comp/comp/Education/educationSect";
import Services from "./components/HomeComp/Services";
import Projects from "./components/HomeComp/Projects/Projects";
import AnimatedSlide from "./components/HomeComp/Projects/Swiper";
import Articles from "./components/HomeComp/Articles";
import ProfileInfo from "./components/HomeComp/Other_Comp/comp/profileInfo";
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
      <main key="main">
        {/* 1. Hero Section */}
        <div className="container mx-auto px-5 pt-5 lg:px-20">
          <Hero />
        </div>

        {/* 2. Tech Stacks Marquee */}
        <TechStacks initialTechStacks={initialTechStacks} />

        {/* 3. Academic & Certifications Section — Appears right after Hero */}
        <div className="container mx-auto px-5 pt-10 lg:px-20">
          <Credentials />
          <EducationSect initialExperiences={initialExperiences} />
        </div>

        {/* 4. Services & Expertise */}
        <div className="container mx-auto px-5 pt-10 lg:px-20">
          <Services initialServices={initialServices} />
        </div>

        {/* 5. Projects Section with Full-Width Carousel ahead of black bg */}
        <div className="container mx-auto px-5 pt-10 lg:px-20">
          <Projects />
        </div>
        <div className="relative h-[400px]">
          <AnimatedSlide initialProjects={initialProjects} />
        </div>

        {/* 6. Articles Section */}
        <Articles initialArticles={initialArticles} />

        {/* 7. About & Client Reviews */}
        <div className="container mx-auto px-5 py-10 lg:px-20">
          <ProfileInfo />
          <Testimonials initialTestimonials={initialTestimonials} />
        </div>
      </main>

      <Footer key="footer" initialFaqs={initialFaqs} />
    </>
  );
}
