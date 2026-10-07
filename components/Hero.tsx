import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[linear-gradient(180deg,_#00000012_60%,_#1a191d_100%)] px-6 pb-16 pt-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[8%] h-[50vw] w-[50vw] max-h-[600px] max-w-[600px] rounded-full bg-accent/30 mix-blend-screen blur-[120px] [animation:aurora-drift_18s_ease-in-out_infinite]" />
        <div className="absolute right-[5%] top-[22%] h-[45vw] w-[45vw] max-h-[550px] max-w-[550px] rounded-full bg-accent-secondary/30 mix-blend-screen blur-[120px] [animation:aurora-drift_22s_ease-in-out_infinite] [animation-delay:-6s]" />
        <div className="absolute bottom-[0%] left-[28%] h-[40vw] w-[40vw] max-h-[500px] max-w-[500px] rounded-full bg-amber-400/20 mix-blend-screen blur-[120px] [animation:aurora-drift_26s_ease-in-out_infinite] [animation-delay:-12s]" />
      </div>

      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06]" />

      <h1 className="relative w-full text-center font-sans text-[8vw] font-bold uppercase tracking-[2.2px] text-white [text-shadow:1px_3px_11px_rgba(0,0,0,0.3)]">
        {personalInfo.name}
      </h1>

      <div className="relative mx-auto -mt-[2.2vw] flex w-full flex-col items-center gap-4 text-center">
        <p className="font-mono text-sm uppercase tracking-[2.2px] text-accent lg:whitespace-nowrap lg:text-[1.6vw]">
          {personalInfo.role}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 font-mono text-sm font-medium">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-background transition-colors hover:opacity-90"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="rounded-full border border-accent px-6 py-3 text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}
