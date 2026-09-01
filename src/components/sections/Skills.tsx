import React from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CodeIcon,
  ServerIcon,
  SmartphoneIcon,
  DatabaseIcon,
  TerminalIcon,
  SparklesIcon,
} from "@/components/ui/Icons";

export function Skills() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "frontend":
        return <CodeIcon size={20} className="text-indigo-600" />;
      case "backend":
        return <ServerIcon size={20} className="text-indigo-600" />;
      case "mobile":
        return <SmartphoneIcon size={20} className="text-emerald-600" />;
      case "database":
        return <DatabaseIcon size={20} className="text-blue-600" />;
      case "devops":
        return <TerminalIcon size={20} className="text-slate-700" />;
      case "ai":
      default:
        return <SparklesIcon size={20} className="text-purple-600" />;
    }
  };

  const getCategoryTheme = (iconName: string) => {
    switch (iconName) {
      case "frontend":
        return {
          bg: "bg-indigo-50/60",
          badge: "bg-indigo-50 text-indigo-700 border-indigo-100",
        };
      case "backend":
        return {
          bg: "bg-blue-50/60",
          badge: "bg-blue-50 text-blue-700 border-blue-100",
        };
      case "mobile":
        return {
          bg: "bg-emerald-50/60",
          badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
        };
      case "database":
        return {
          bg: "bg-amber-50/60",
          badge: "bg-amber-50 text-amber-700 border-amber-100",
        };
      case "devops":
        return {
          bg: "bg-slate-50",
          badge: "bg-slate-100 text-slate-700 border-slate-200",
        };
      case "ai":
      default:
        return {
          bg: "bg-purple-50/60",
          badge: "bg-purple-50 text-purple-700 border-purple-100",
        };
    }
  };

  return (
    <section id="skills" aria-label="Skills" className="py-16 md:py-24 border-t border-slate-200/80">
      <SectionHeading
        badge="Technical Toolkit"
        title="Skills &amp; Technologies"
        subtitle="Practical tools and technologies I use across full-stack, mobile, and AI application development."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillCategories.map((category) => {
          const theme = getCategoryTheme(category.iconName);

          return (
            <div
              key={category.title}
              className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between"
            >
              <div>
                {/* Header with category icon & title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg ${theme.bg} flex items-center justify-center shrink-0`}>
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Category description */}
                {category.description && (
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                )}

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200/60 hover:bg-white hover:border-slate-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Honest Learning indicator */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                <span>Continuously developing</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
