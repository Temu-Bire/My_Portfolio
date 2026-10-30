interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? "mx-auto max-w-2xl text-center" : "max-w-3xl"
      } ${className}`}
    >
      {badge && (
        <div
          className={`mb-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-ink ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {badge}
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {/* Small accent bar under every heading */}
      <span
        aria-hidden="true"
        className={`mt-4 block h-1 w-12 rounded-full bg-accent ${
          isCenter ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}