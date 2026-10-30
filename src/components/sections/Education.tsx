import { educationData, certificationsData } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  GraduationCapIcon,
  AwardIcon,
  CheckCircleIcon,
} from "@/components/ui/Icons";

export function Education() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="border-t border-line py-16 md:py-24"
    >
      <SectionHeading title="Education" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
        {/* Degree cards */}
        {educationData.map((item) => (
          <article key={item.degree} className="card flex flex-col p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-line pb-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                <GraduationCapIcon size={24} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-ink">
                  Degree program
                </p>
                <h3 className="text-lg font-bold leading-snug sm:text-xl">
                  {item.degree}
                </h3>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold">{item.institution}</p>
              <p className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted">
                <span className="rounded-full bg-surface-2 px-2.5 py-0.5 font-medium text-ink">
                  {item.status}
                </span>
              </p>
            </div>

            <div className="mt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
                Academic focus &amp; practical work
              </h4>
              <ul className="mt-3 space-y-2">
                {item.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <CheckCircleIcon
                      size={16}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        {/* Certification cards */}
        {certificationsData.map((cert) => (
          <article key={cert.title} className="card flex flex-col p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-line pb-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                <AwardIcon size={24} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-ink">
                  Professional certification
                </p>
                <h3 className="text-lg font-bold leading-snug sm:text-xl">
                  {cert.title}
                </h3>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold">
                Issuer: <span className="text-accent-ink">{cert.issuer}</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {cert.description}
              </p>
            </div>

            <div className="mt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
                Competencies verified
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {cert.skillsCovered.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}