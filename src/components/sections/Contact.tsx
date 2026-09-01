"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean client-side submission & provide immediate feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const getSocialIcon = (iconName: string) => {
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
    <section id="contact" aria-label="Contact" className="py-16 md:py-24 border-t border-slate-200/80">
      <SectionHeading
        title="Get in Touch"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Direct Contact &amp; Profiles
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Feel free to send a direct message, reach out via email, or connect across any of my technical profiles.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-3.5 p-3 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                  <MailIcon size={20} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 block">
                    Email
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {profileData.email}
                  </span>
                </div>
              </a>

              <div className="pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 block mb-3">
                  Online Profiles
                </span>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  {profileData.socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target={social.url.startsWith("http") ? "_blank" : undefined}
                      rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 text-slate-700 hover:text-indigo-600 text-xs font-semibold transition-colors"
                    >
                      {getSocialIcon(social.icon)}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircleIcon size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Message Sent Successfully
                </h4>
                <p className="text-sm text-slate-600 max-w-md">
                  Thank you for reaching out! I appreciate your message and will respond as soon as possible.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-2"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  Send a Message
                </h3>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Write your note or project inquiry here..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50/50 resize-y"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRightIcon size={15} />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
