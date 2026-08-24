import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-[90vh] flex-col justify-center py-20">
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Temesgen Birhenu</span>
        </h1>

        <p className="text-lg text-slate-400 sm:text-xl leading-relaxed">
          Full-Stack & Mobile Software Engineer crafting responsive web applications, mobile platforms, and robust cloud services.        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="#projects"
            className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
          >
            View Projects
          </Link>
          <Link
            href="#experience"
            className="rounded-xl border border-slate-800 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-slate-700 hover:bg-slate-800 active:scale-95"
          >
            Experience
          </Link>
        </div>
      </div>
    </section>
  );
}