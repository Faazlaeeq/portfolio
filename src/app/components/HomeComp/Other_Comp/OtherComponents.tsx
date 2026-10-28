import EducationSect from "./comp/Education/educationSect";
import Testimonials from "./comp/Testimonials";
import { Education, Work } from "../../../../../types/Experience";
import type { Testimonials as TestimonialType } from "../../../../../types/Testimonials";

export default function OtherComponents({
  initialExperiences,
  initialTestimonials,
}: {
  initialExperiences?: { education: Education[]; work: Work[] };
  initialTestimonials?: TestimonialType[];
}) {
  return (
    <section>
      <div className="container mx-auto px-5 py-[80px] lg:px-20">
        <EducationSect initialExperiences={initialExperiences} />
        <Testimonials initialTestimonials={initialTestimonials} />
      </div>
    </section>
  );
}
