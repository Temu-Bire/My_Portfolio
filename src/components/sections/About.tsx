import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {


  return (
    <section id="about" aria-label="About Me" className="py-16 md:py-24 border-t border-slate-200/80">
      <SectionHeading
        title="About Me"
      />

      {/* Main Narrative Content */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xs space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
          {profileData.aboutParagraphs.map((paragraph, index) => (
            <p key={index} className="text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}
