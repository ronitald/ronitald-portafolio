import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col items-center gap-8 px-6 py-16 text-center">
      <h2 className="font-heading text-2xl font-bold">Habilidades</h2>
      <div className="flex flex-col gap-6">
        {skillCategories.map((category) => (
          <div key={category.category}>
            <h3 className="text-lg font-semibold">{category.category}</h3>
            <ul className="flex flex-wrap justify-center gap-2">
              {category.items.map((skill) => (
                <li
                  key={skill.name}
                  className="rounded-full border px-3 py-1 text-sm"
                >
                  {skill.name}
                  {skill.detail && ` (${skill.detail})`}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
