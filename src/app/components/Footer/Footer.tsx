import ContactDetails from "./Contact/Contact";

export default function Footer({ initialFaqs }: { initialFaqs?: any }) {
  return (
    <footer className="w-full bg-[#111111]">
      <div className="container mx-auto px-5 lg:px-20">
        <ContactDetails />
      </div>
    </footer>
  );
}
