import ClientHome from "./ClientHome";
import {
  getServices,
  getProjects,
  getTechStacks,
  getArticles,
  getExperiences,
  getTestimonials,
  getFAQ,
} from "../../sanity/sanity-utils";

export const revalidate = 60;

export default async function Home() {
  const [
    services,
    projects,
    techStacks,
    articles,
    experiences,
    testimonials,
    faqs,
  ] = await Promise.all([
    getServices().catch(() => []),
    getProjects().catch(() => []),
    getTechStacks().catch(() => []),
    getArticles().catch(() => []),
    getExperiences().catch(() => ({ education: [], work: [] })),
    getTestimonials().catch(() => []),
    getFAQ().catch(() => []),
  ]);

  return (
    <ClientHome
      initialServices={services}
      initialProjects={projects}
      initialTechStacks={techStacks}
      initialArticles={articles}
      initialExperiences={experiences}
      initialTestimonials={testimonials}
      initialFaqs={faqs}
    />
  );
}
