"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/Icons";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted";

export function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not send your message. Please try again.",
      );
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Success message: stays above the form */}
      {status === "success" && (
        <div
          role="status"
          className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800"
        >
          <CheckCircleIcon size={24} />
          <div>
            <p className="text-sm font-semibold">Message sent successfully!</p>
            <p className="text-xs">Thank you for reaching out. I'll reply as soon as I can.</p>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="name" className={labelClass}>
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={100}
          autoComplete="name"
          placeholder="e.g. Alex Johnson"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          placeholder="e.g. alex@example.com"
          className={fieldClass}
        />
      </div>

      {/* New subject field */}
      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          minLength={3}
          maxLength={150}
          placeholder="e.g. Project collaboration"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={5}
          placeholder="Tell me about your project or question..."
          className={`${fieldClass} resize-y`}
        />
      </div>

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-800"
        >
          {errorMessage} 
         
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="md"
        className="w-full"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <span>Sending...</span>
        ) : (
          <>
            <span>Send message</span>
            <ArrowRightIcon size={15} />
          </>
        )}
      </Button>
    </form>
  );
}