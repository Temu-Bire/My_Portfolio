import React from "react";
import Image from "next/image";
import { Project } from "@/types";
import { GithubIcon, ExternalLinkIcon, CodeIcon } from "./Icons";
import { Button } from "./Button";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
 

  return (
    <article className="group flex flex-col h-full bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1 overflow-hidden">
      {/* Visual Header / Image Container */}
      <div className="relative w-full h-48 sm:h-52 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200/70 border-b border-slate-100 overflow-hidden flex items-center justify-center">
        {project.image ? (
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400 gap-2">
            <CodeIcon size={32} className="text-slate-400" />
            <span className="text-xs font-medium text-slate-500">
              Project Preview
            </span>
          </div>
        )}        
      </div>

      {/* Body Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>

        {/* Short description */}
        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {project.description}
        </p>

        {/* Problem Solved highlight */}
        {project.problemSolved && (
          <div className="mt-3 p-3 rounded-lg bg-slate-50 border border-slate-150/70 text-xs text-slate-600">
            <span className="font-semibold text-slate-700 block mb-0.5">
              Problem Solved:
            </span>
            {project.problemSolved}
          </div>
        )}

        {/* Technologies List */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200/70 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="mt-auto pt-5 flex items-center gap-3">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              href={project.githubUrl}
              isExternal
              className="flex-1 text-xs"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <GithubIcon size={15} />
              <span>Source</span>
            </Button>
          )}

          {project.liveUrl && (
            <Button
              variant="primary"
              size="sm"
              href={project.liveUrl}
              isExternal
              className="flex-1 text-xs"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLinkIcon size={14} />
              <span>Live Demo</span>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
