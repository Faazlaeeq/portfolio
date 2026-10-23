import EducationSect from "./comp/Education/educationSect";
import ProfileInfo from "./comp/profileInfo";
import Testimonials from "./comp/Testimonials";
import Credentials from "../Credentials";
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
        <ProfileInfo />
        <EducationSect initialExperiences={initialExperiences} />
        <Credentials />
        <Testimonials initialTestimonials={initialTestimonials} />
      </div>
    </section>
  );
}
