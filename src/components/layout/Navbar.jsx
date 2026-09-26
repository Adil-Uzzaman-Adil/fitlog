"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan = [], saved = [] } = useFitLog();

  const link = (href, label) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition rounded-md ${
          active ? "text-accent" : "text-muted hover:text-text"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="FitLog Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="font-display font-bold tracking-widest text-lg">
            FITLOG
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {link("/", "Workout")}
          {link("/my-plan", "My Plan")}
        </nav>

        {/* Badges */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="px-3 py-1.5 rounded-full bg-accent text-bg text-xs font-bold tracking-wide hover:opacity-90 transition"
          >
            PLAN {plan.length}
          </Link>
          <Link
            href="/my-plan"
            className="px-3 py-1.5 rounded-full border border-border text-xs font-bold tracking-wide text-text hover:border-accent transition"
          >
            SAVED {saved.length}
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="md:hidden flex items-center justify-center gap-1 pb-2">
        {link("/", "Workout")}
        {link("/my-plan", "My Plan")}
      </nav>
    </header>
  );
}