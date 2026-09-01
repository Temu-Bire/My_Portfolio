import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName: string) => {
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
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-100">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                TB
              </div>
              <span className="font-bold text-slate-900 text-lg">
                {profileData.name}
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              4th-Year Computer Science Student building practical, accessible full-stack web, mobile, and AI applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="#about" className="hover:text-indigo-600 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-indigo-600 transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-indigo-600 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-indigo-600 transition-colors">
                  Education &amp; Credentials
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Connect
            </h4>
            <div className="flex items-center gap-2">
              {profileData.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200/60 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label={social.label}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-500 pt-1">
              Open to collaborative projects, technical discussions, and opportunities.
            </p>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
