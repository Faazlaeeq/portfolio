"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/HomeComp/Services";
import OtherComponents from "./components/HomeComp/Other_Comp/OtherComponents";
import Footer from "./components/Footer/Footer";
import Projects from "./components/HomeComp/Projects/Projects";
import AnimatedSlide from "./components/HomeComp/Projects/Swiper";
import Articles from "./components/HomeComp/Articles";
import TechStacks from "./components/TechStacks";
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
        <div className="container mx-auto px-5 pt-5 lg:px-20">
          <Hero />
        </div>
        <TechStacks initialTechStacks={initialTechStacks} />
        <div className="container mx-auto px-5 pt-5 lg:px-20">
          <Services initialServices={initialServices} />
          <Projects />
        </div>
        <div className="relative h-[400px]">
          <AnimatedSlide initialProjects={initialProjects} />
        </div>
        <Articles initialArticles={initialArticles} />
        <OtherComponents
          initialExperiences={initialExperiences}
          initialTestimonials={initialTestimonials}
        />
      </main>
      <Footer key="footer" initialFaqs={initialFaqs} />
    </>
  );
}
