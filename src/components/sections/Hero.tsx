"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ArrowRightIcon,
  CodeIcon,
} from "@/components/ui/Icons";

export function Hero() {
  const [imageError, setImageError] = useState(false);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <GithubIcon size={18} />;
      case "linkedin":
        return <LinkedinIcon size={18} />;
      case "mail":
      default:
        return <MailIcon size={18} />;
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span>4th-Year CS Student · Full-Stack &amp; AI Developer</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Building practical software with{" "}
            <span className="text-indigo-600">code, curiosity,</span> and{" "}
            <span className="text-slate-900 underline decoration-indigo-300 decoration-wavy decoration-2">
              Computer Science.
            </span>
          </h1>

          {/* Bio Summary */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            {profileData.heroSummary}
          </p>

          {/* CTA Buttons & Socials */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Button variant="primary" size="lg" href="#projects">
              <span>View My Projects</span>
              <ArrowRightIcon size={16} />
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              <span>Contact Me</span>
            </Button>
          </div>

          {/* Social Profiles Row */}
          <div className="pt-4 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              Connect:
            </span>
            <div className="flex items-center gap-2">
              {profileData.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-lg text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200 bg-white shadow-2xs transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label={social.label}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Professional Photo Slot */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xs sm:max-w-sm aspect-square">
            {/* Soft decorative backdrop */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-indigo-100 to-sky-100 -z-10 blur-xs" />

            {/* Photo Card Container */}
            <div className="relative h-full w-full rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-sm overflow-hidden flex flex-col items-center justify-center">
              {!imageError ? (
                <div className="relative h-full w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src={profileData.photoPath}
                    alt={`${profileData.name} - Professional Portrait`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center"
                    priority
                    onError={() => setImageError(true)}
                  />
                </div>
              ) : (
                /* Clean placeholder fallback if profile.jpg is not yet provided */
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100 border border-dashed border-indigo-200 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-indigo-600 text-white font-bold text-2xl flex items-center justify-center shadow-sm mb-3">
                    TB
                  </div>
                  <h2 className="font-bold text-slate-900 text-base">
                    {profileData.name}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 max-w-[200px]">
                    Photo slot: Place your photo at{" "}
                    <code className="text-indigo-600 font-mono text-[11px] bg-indigo-50 px-1 py-0.5 rounded">
                      /public/profile.jpg
                    </code>
                  </p>
                </div>
              )}

              {/* Verified Student Badge on bottom corner */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs rounded-lg border border-slate-200/80 px-3 py-2 shadow-xs flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <CodeIcon size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    CS Senior Developer
                  </span>
                  <span className="text-[11px] text-slate-500 leading-tight">
                    3+ Years Practical Coding
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
