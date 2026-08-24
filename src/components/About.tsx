import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-10 border-t border-slate-800/60">
        <div className="flex justify-center">
            <div className="inline-flex items-center  px-3 pb-10 text-5xl font-bold text-indigo-400">
                About Me
            </div>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Photo Container */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-sm aspect-square">
            {/* Glowing Accent Backdrop */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-xl transition duration-500 group-hover:opacity-60" />
            
            {/* Image Wrapper Card */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-2 shadow-2xl backdrop-blur-sm">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-950">
                <Image
                  src="/profile.jpg" // Place your photo in the /public folder as profile.jpg
                  alt="Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center grayscale contrast-105 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 space-y-6">
          

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Building practical software for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              real-world impact.
            </span>
          </h2>

          <div className="space-y-4 text-slate-400 leading-relaxed text-base">
            <p>
              I am a Full-Stack and Mobile Software Engineer passionate about transforming complex challenges into clean, usable software solutions. I build modern, responsive web applications, mobile platforms, and scalable backend infrastructure.
            </p>

            <p>
              My core toolkit includes <span className="text-slate-200 font-medium">React, Next.js, Node.js, Type Script and React native</span>, coupled with hands-on experience in cloud architectures, databases, and AI tooling. I focus on writing maintainable code, optimizing API performant backends, and designing smooth client interactions.
            </p>

            <p>
              I continuously sharpen my software engineering capabilities by shipping real-world apps and refining full-stack architecture patterns through open collaboration and client projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}