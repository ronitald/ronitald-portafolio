"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Proyectos" },
  { href: "#certifications", label: "Certificaciones" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-10 grid grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-10">
      <div className="relative justify-self-start">
        {/* Mobile/tablet: solo la flecha, abre/cierra el menú */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label="Abrir menú de navegación"
          className="font-mono text-3xl text-accent lg:hidden"
        >
          &gt;
        </button>

        {/* Desktop: logo completo */}
        <span className="hidden items-center font-bold tracking-wide lg:inline-flex">
          <span className="mr-1 inline-block align-middle font-mono text-3xl text-accent">
            &gt;
          </span>
          <span className="align-middle font-logo text-2xl text-accent">Ronitald</span>
          <span className="text-accent-secondary ml-1 inline-block scale-x-125 align-middle font-mono [animation:blink_1s_step-end_infinite]">
            _
          </span>
        </span>

        {/* Menú desplegable en mobile/tablet, anclado a la flecha */}
        {isOpen && (
          <div className="absolute left-0 top-full mt-2 flex flex-col items-start gap-1 rounded-2xl border border-white/10 bg-background/90 p-2 font-mono text-sm shadow-lg backdrop-blur-md lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-full px-4 py-2 text-foreground/70 transition-all duration-200 hover:bg-white/10 hover:text-foreground hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Mobile/tablet: nombre centrado */}
      <span className="col-start-2 justify-self-center font-logo text-lg text-accent lg:hidden">
        Ronitald
      </span>

      {/* Desktop: menú centrado */}
      <nav className="relative col-start-2 hidden justify-self-center rounded-full border border-white/10 bg-white/5 shadow-lg backdrop-blur-md lg:block">
        <div className="flex items-center gap-1 p-2 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-foreground/70 transition-all duration-200 hover:bg-white/10 hover:text-foreground hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)] hover:backdrop-blur-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
