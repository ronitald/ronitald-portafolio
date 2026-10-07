import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="flex flex-col items-center gap-8 px-6 py-16 text-center">
      <h2 className="font-heading text-2xl font-bold">Certificaciones</h2>
      <ul className="flex w-full max-w-2xl flex-col gap-4">
        {certifications.map((certification) => (
          <li
            key={certification.name}
            className="flex flex-col gap-1 rounded-lg border p-4 text-left"
          >
            <span className="font-semibold">{certification.name}</span>
            <span className="text-sm">
              {certification.issuer} — {certification.date}
            </span>
            {certification.credentialURL && (
              <a
                href={certification.credentialURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium underline"
              >
                Ver certificado
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
