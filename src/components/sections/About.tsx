import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Quick facts shown beside the text. These come from your own About text; edit freely.
const FACTS = [
  { value: "4th year", label: "Computer Science student" },
  { value: "~3 years", label: "of hands-on coding" },
  { value: "Web · Mobile · AI", label: "what I build" },
];

export function About() {
  // The first paragraph is shown larger as the lead; the rest follow in a lighter tone.
  const [lead, ...rest] = profileData.aboutParagraphs;

  return (
    <section
      id="about"
      aria-label="About me"
      className="border-t border-line py-16 md:py-24"
    >
      <SectionHeading title="About Me" />

      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="space-y-5 lg:col-span-3">
          <p className="text-lg leading-relaxed text-ink sm:text-xl">{lead}</p>
          {rest.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-muted sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-1">
          {FACTS.map((fact) => (
            <li
              key={fact.label}
              className="rounded-2xl border border-line bg-surface p-5"
            >
              <p className="font-display text-xl font-bold text-accent-ink">
                {fact.value}
              </p>
              <p className="mt-1 text-sm text-muted">{fact.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}