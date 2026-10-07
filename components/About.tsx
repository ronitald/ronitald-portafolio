import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center gap-4 bg-surface px-6 py-16 text-center">
      <h2 className="font-heading text-2xl font-bold">Sobre mí</h2>
      <p className="max-w-2xl text-base">{personalInfo.bio}</p>
    </section>
  );
}