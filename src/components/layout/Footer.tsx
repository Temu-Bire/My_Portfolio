import { profileData } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page flex flex-col items-center justify-between gap-2 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {currentYear} {profileData.name}. All rights reserved.
        </p>
        <p>Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}