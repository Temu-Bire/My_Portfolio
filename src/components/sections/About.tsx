import React from "react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  GraduationCapIcon,
  CodeIcon,
  LayersIcon,
  SmartphoneIcon,
} from "@/components/ui/Icons";

export function About() {
  const statIcons = [
    <GraduationCapIcon key="cs" size={24} className="text-indigo-600" />,
    <CodeIcon key="exp" size={24} className="text-indigo-600" />,
    <LayersIcon key="proj" size={24} className="text-indigo-600" />,
    <SmartphoneIcon key="stack" size={24} className="text-indigo-600" />,
  ];

  return (
    <section id="about" aria-label="About Me" className="py-16 md:py-24 border-t border-slate-200/80">
      <SectionHeading
        badge="About Me"
        title="Software Engineering with a Computer Science Foundation"
        subtitle="Bridging theoretical concepts and real-world implementation across modern software stacks."
      />

      {/* Main Narrative Content */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xs space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
          {profileData.aboutParagraphs.map((paragraph, index) => (
            <p key={index} className="text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>

        {/* 4 Personal Statistics Cards */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {profileData.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-xs flex flex-col items-center text-center hover:border-indigo-200 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-indigo-50 flex items-center justify-center mb-3">
                {statIcons[idx]}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
