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
    <footer className="bg-white border-t border-slate-200 my-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 ">
        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
