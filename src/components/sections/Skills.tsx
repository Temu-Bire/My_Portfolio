import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CodeIcon,
  ServerIcon,
  SmartphoneIcon,
  DatabaseIcon,
  TerminalIcon,
  SparklesIcon,
} from "@/components/ui/Icons";

// Maps the iconName in data/skills.ts to an icon component.
const categoryIcons = {
  frontend: CodeIcon,
  backend: ServerIcon,
  mobile: SmartphoneIcon,
  database: DatabaseIcon,
  devops: TerminalIcon,
  ai: SparklesIcon,
} as const;

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="border-t border-line py-16 md:py-24"
    >
      <SectionHeading title="Skills &amp; Technologies" />

      {/* One card, one row per category: much shorter than six separate cards. */}
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
        <ul className="divide-y divide-line">
          {skillCategories.map((category) => {
            const Icon =
              categoryIcons[category.iconName as keyof typeof categoryIcons] ??
              SparklesIcon;

            return (
              <li
                key={category.title}
                className="grid gap-4 p-5 sm:p-6 md:grid-cols-[13rem_1fr] md:items-center md:gap-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <ul
                  aria-label={`${category.title} skills`}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium text-ink transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent-ink"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}