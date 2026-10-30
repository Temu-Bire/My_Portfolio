import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircleIcon } from "@/components/ui/Icons";

// Vertical timeline: the period sits on the left on desktop and above the card on mobile.
// No "use client" needed: nothing here uses state.
export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="border-t border-line py-16 md:py-24"
    >
      <SectionHeading title="Experience" />

      <ol className="mx-auto max-w-4xl">
        {experienceData.map((item, index) => {
          const isLast = index === experienceData.length - 1;

          return (
            <li
              key={`${item.role}`}
              className="relative grid gap-3 pb-10 pl-8 last:pb-0 md:grid-cols-[10rem_1fr] md:gap-8 md:pl-0"
            >
            

              <div aria-hidden="true" />

              {/* Card */}
              <div className="card p-5 sm:p-6">
                <h3 className="text-lg font-bold sm:text-xl">{item.role}</h3>
                <p className="mt-0.5 text-sm font-medium text-accent-ink">
                  {item.context}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <CheckCircleIcon
                        size={16}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}