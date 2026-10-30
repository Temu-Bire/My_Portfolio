import React from "react";
import Link from "next/link";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  /** For file links such as a CV PDF: renders a plain <a download> instead of a Next.js Link. */
  download?: boolean | string;
  /** Works for buttons and links (the old version dropped onClick on links). */
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  download,
  onClick,
  children,
  className = "",
  ...props
}: ButtonProps) {
  // Keyboard focus ring comes from the global :focus-visible rule in globals.css.
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-accent text-white shadow-sm hover:bg-accent-ink hover:shadow-md active:scale-[0.98]",
    secondary:
      "bg-surface-2 text-ink border border-line hover:border-accent active:scale-[0.98]",
    outline:
      "border border-line bg-surface text-ink hover:border-accent hover:text-accent-ink active:scale-[0.98]",
    ghost:
      "text-muted hover:text-ink hover:bg-surface-2 active:scale-[0.98]",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    const isHttp = href.startsWith("http");
    const useAnchor = Boolean(download) || isExternal || isHttp || href.startsWith("mailto:");

    if (useAnchor) {
      return (
        <a
          href={href}
          download={download || undefined}
          className={combinedStyles}
          onClick={onClick}
          aria-label={props["aria-label"]}
          target={isHttp ? "_blank" : undefined}
          rel={isHttp ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={combinedStyles}
        onClick={onClick}
        aria-label={props["aria-label"]}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} onClick={onClick} {...props}>
      {children}
    </button>
  );
}