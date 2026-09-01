"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCategory } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Full Stack",
  "AI",
  "Mobile",
  "Backend",
  "Web",
  "DevOps",
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === selectedCategory);

  return (
    <section id="projects" aria-label="Featured Projects" className="py-16 md:py-24 border-t border-slate-200/80">
      <SectionHeading
        badge="Featured Projects"
        title="Practical Software &amp; Applications"
        subtitle="A collection of 6 projects demonstrating full-stack architecture, AI integration, mobile development, and Computer Science concepts."
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category;
          const count =
            category === "All"
              ? projects.length
              : projects.filter((p) => p.category === category).length;

          if (category !== "All" && count === 0) return null;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center gap-1.5 ${
                isSelected
                  ? "bg-indigo-600 text-white shadow-xs font-semibold"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:border-slate-300"
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isSelected
                    ? "bg-indigo-700/80 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 6 Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Footer note regarding configurable project sources */}
      <div className="mt-12 text-center text-xs text-slate-500">
        <p>
          All projects are data-driven and easily configurable in{" "}
          <code className="text-indigo-600 font-mono bg-indigo-50 px-1 py-0.5 rounded">
            src/data/projects.ts
          </code>
        </p>
      </div>
    </section>
  );
}
