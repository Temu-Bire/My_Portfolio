import React from "react";
import { educationData, certificationsData } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  GraduationCapIcon,
  AwardIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
} from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

export function Education() {
  return (
    <section id="education" aria-label="Education & Credentials" className="py-16 md:py-24 border-t border-slate-200/80">
      <SectionHeading
        badge="Credentials"
        title="Education &amp; Certification"
        subtitle="Academic foundations in Computer Science complemented by intensive industry-standard software engineering training."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Education Card */}
        {educationData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <GraduationCapIcon size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                      Degree Program
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {item.degree}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Institution details */}
              <div className="mt-4 space-y-1">
                <p className="text-sm font-semibold text-slate-800">
                  {item.institution}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-500">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-slate-100 font-medium text-slate-700">
                    {item.status}
                  </span>
                  <span>•</span>
                  <span>{item.expectedGraduation}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-5 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Academic Focus &amp; Practical Work
                </h4>
                <ul className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed"
                    >
                      <CheckCircleIcon
                        size={16}
                        className="text-indigo-600 shrink-0 mt-0.5"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 italic">
              * University and graduation date details can be customized in{" "}
              <code>src/data/education.ts</code>
            </div>
          </div>
        ))}

        {/* Certification Card */}
        {certificationsData.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <AwardIcon size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                      Professional Certification
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Issuer */}
              <div className="mt-4">
                <p className="text-sm font-semibold text-slate-800">
                  Issuer: <span className="text-indigo-600 font-bold">{cert.issuer}</span>
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills covered */}
              <div className="mt-5 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Competencies Verified
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Verification action */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Issued by Gebeya Inc.
              </span>
              {cert.verificationUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  href={cert.verificationUrl}
                  isExternal
                  className="text-xs"
                >
                  <span>Verification Link (Placeholder)</span>
                  <ExternalLinkIcon size={13} />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
