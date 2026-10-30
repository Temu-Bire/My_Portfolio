import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/sections/ContactForm";
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/ui/Icons";

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
} as const;

// Server component: only the form needs JavaScript, so only ContactForm is a client component.
export function Contact() {
  // The email gets its own big button, so it is not repeated in the profile list.
  const profiles = profileData.socialLinks.filter((link) => link.icon !== "mail");

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="border-t border-line py-16 md:py-24"
    >
      <SectionHeading
        title="Get in Touch"
        subtitle="Have a project, an internship or a question? Send me a message and I'll reply as soon as I can."
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12">
        {/* Left: direct contact */}
        <div className="card space-y-6 p-6 sm:p-8 lg:col-span-5">
          <div>
            <h3 className="text-lg font-bold sm:text-xl">Prefer email?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Write to me directly and I&apos;ll get back to you.
            </p>
            <Button
              variant="primary"
              size="md"
              href={`mailto:${profileData.email}`}
              className="mt-4 w-full"
            >
              <MailIcon size={16} />
              <span className="truncate">{profileData.email}</span>
            </Button>
          </div>

          <div className="border-t border-line pt-6">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Online profiles
            </h4>
            <ul className="flex flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row">
              {profiles.map((social) => {
                const Icon =
                  socialIcons[social.icon as keyof typeof socialIcons] ?? MailIcon;
                return (
                  <li key={social.name} className="flex-1">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center justify-center gap-2 rounded-lg border border-line bg-surface p-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent-ink"
                    >
                      <Icon size={18} />
                      <span>{social.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right: form */}
        <div className="card p-6 sm:p-8 lg:col-span-7">
          <h3 className="mb-5 text-lg font-bold sm:text-xl">Send a message</h3>
          <ContactForm fallbackEmail={profileData.email} />
        </div>
      </div>
    </section>
  );
}