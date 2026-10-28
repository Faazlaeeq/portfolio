import ContactDetails from "./Contact/Contact";

export default function Footer({ initialFaqs }: { initialFaqs?: any } = {}) {
  return (
    <footer className="mt-[80px] bg-black">
      <div className="container mx-auto px-5 pt-5 lg:px-20">
        <ContactDetails />
      </div>
    </footer>
  );
}
