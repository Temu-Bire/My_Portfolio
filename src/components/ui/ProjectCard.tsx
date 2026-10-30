import Image from "next/image";
import type { Project } from "@/types";
import { GithubIcon, ExternalLinkIcon, CodeIcon } from "./Icons";
import { Button } from "./Button";

interface ProjectCardProps {
  project: Project;
  /** "featured" is the large horizontal card used for your best project. */
  variant?: "default" | "featured";
}

// Placeholder links ("#", or a YOUR_USERNAME template) should not become buttons.
function isRealUrl(url: string | undefined): url is string {
  return (
    typeof url === "string" &&
    url !== "" &&
    url !== "#" &&
    !url.includes("YOUR_USERNAME")
  );
}

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const hasSource = isRealUrl(project.githubUrl);
  const hasLive = isRealUrl(project.liveUrl);

  return (
    <article
      className={`card group flex h-full flex-col overflow-hidden ${
        isFeatured ? "lg:flex-row" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden border-b border-line bg-surface-2 ${
          isFeatured
            ? "aspect-[16/10] lg:aspect-auto lg:min-h-[22rem] lg:w-1/2 lg:border-b-0 lg:border-r"
            : "aspect-[16/10]"
        }`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes={
              isFeatured
                ? "(max-width: 1024px) 100vw, 576px"
                : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 384px"
            }
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
            <CodeIcon size={32} />
            <span className="text-xs font-medium">Project preview</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div
        className={`flex flex-1 flex-col p-5 sm:p-6 ${
          isFeatured ? "lg:w-1/2 lg:p-10" : ""
        }`}
      >
        {isFeatured && (
          <span className="mb-3 inline-flex w-fit items-center rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-accent-ink">
            Featured project
          </span>
        )}

        <h3
          className={`font-display font-bold tracking-tight transition-colors group-hover:text-accent-ink ${
            isFeatured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          {project.title}
        </h3>

        <ul
          aria-label={`${project.title} technologies`}
          className="mt-4 flex flex-wrap gap-1.5"
        >
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-surface-2 px-2 py-0.5 text-xs font-medium text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(hasSource || hasLive) && (
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
            {hasSource && (
              <Button
                variant="outline"
                size={isFeatured ? "md" : "sm"}
                href={project.githubUrl}
                isExternal
                className={isFeatured ? "" : "flex-1 text-xs"}
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <GithubIcon size={15} />
                <span>Source</span>
              </Button>
            )}

            {hasLive && (
              <Button
                variant="primary"
                size={isFeatured ? "md" : "sm"}
                href={project.liveUrl}
                isExternal
                className={isFeatured ? "" : "flex-1 text-xs"}
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLinkIcon size={14} />
                <span>Live Demo</span>
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}