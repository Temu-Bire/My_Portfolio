import React from "react";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircleIcon, CodeIcon } from "@/components/ui/Icons";

export function Experience() {
  return (
    <section id="experience" aria-label="Experience & Journey" className="py-16 md:py-24 border-t border-slate-200/80">
      <SectionHeading
        badge="Development Journey"
        title="Experience &amp; Project Track Record"
        subtitle="3+ years of continuous hands-on software development across university coursework, personal engineering builds, and collaborative technical projects."
      />

      <div className="max-w-4xl mx-auto space-y-8">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-xs relative overflow-hidden"
          >
            {/* Top row: Role & Timeline */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <CodeIcon size={20} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-indigo-600">
                    {item.context}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 w-fit">
                {item.period}
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              {item.description}
            </p>

            {/* Highlights */}
            <div className="mt-5 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Key Technical Focus Areas
              </h4>
              <ul className="space-y-2">
                {item.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed"
                  >
                    <CheckCircleIcon
                      size={16}
                      className="text-indigo-600 shrink-0 mt-0.5"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
