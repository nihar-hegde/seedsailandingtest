import ContactForm from "@/components/Contact/ContactForm";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "This is Contact Page for SeedsAI",
  // other metadata
};

const ContactPage = () => {
  return (
    <section className="w-full lg:px-52 lg:py-20">
      <ContactForm />
    </section>
  );
};

export default ContactPage;
