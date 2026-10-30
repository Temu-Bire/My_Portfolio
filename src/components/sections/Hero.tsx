import Image from "next/image";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/ui/Icons";

// Edit these three lines to change the hero copy.
const CV_PATH = "/Temesgen-Birhanu-CV.pdf"; // put the PDF in /public
const STACK = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "FastAPI"];

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
} as const;

// No "use client" needed: nothing here uses state or effects,
// so this section ships zero JavaScript to the browser.
export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-20"
    >
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Left: text and calls to action */}
        <div className="flex flex-col items-start space-y-6 lg:col-span-7">

          <h1
            className="animate-fade-up text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            I build  {" "}
            <span className="text-accent">Full-Stack apps</span> 
            
          </h1>

          <p
            className="animate-fade-up max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {profileData.heroSummary}
          </p>

          <div
            className="animate-fade-up flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:items-center"
            style={{ animationDelay: "240ms" }}
          >
            <Button variant="primary" size="lg" href="#projects">
              <span>View Projects</span>
              <ArrowRightIcon size={16} />
            </Button>
            <Button variant="outline" size="lg" href={CV_PATH} download>
              <DownloadIcon size={16} />
              <span>Download CV</span>
            </Button>
          </div>

          <div
            className="animate-fade-up flex flex-wrap items-center gap-x-6 gap-y-4 pt-4"
            style={{ animationDelay: "320ms" }}
          >
            <ul aria-label="Main technologies" className="flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              {profileData.socialLinks.map((social) => {
                const Icon =
                  socialIcons[social.icon as keyof typeof socialIcons] ?? MailIcon;
                const external = social.url.startsWith("http");
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="rounded-lg border border-line bg-surface p-2 text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: photo */}
        <div className="animate-fade-up lg:col-span-5" style={{ animationDelay: "200ms" }}>
          <div className="relative isolate mx-auto w-full max-w-[18rem] sm:max-w-sm lg:ml-auto lg:mr-0">
            {/* Accent glow behind the frame */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/40 via-accent/10 to-transparent blur-2xl"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface p-2 shadow-xl">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-surface-2">
                <Image
                  src={profileData.photoPath}
                  alt={`${profileData.name} - portrait`}
                  fill
                  sizes="(max-width: 1024px) 80vw, 400px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}