import { contactInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center gap-6 bg-surface px-6 py-16 text-center">
      <h2 className="font-heading text-2xl font-bold">Contacto</h2>
      <a href={`mailto:${contactInfo.email}`} className="underline">
        {contactInfo.email}
      </a>
      <div className="flex gap-6 text-sm font-medium">
        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="underline">
          GitHub
        </a>
        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="underline">
          LinkedIn
        </a>
        <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="underline">
          Instagram
        </a>
      </div>
    </section>
  );
}
