import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-7xl sm:text-9xl font-bold text-accent">
          404
        </h1>
        <p className="mt-4 text-2xl font-display uppercase tracking-widest">
          Page not found
        </p>
        <p className="text-muted mt-2">
          That route doesn&apos;t exist. Let&apos;s get you back to training.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-accent text-bg font-bold tracking-widest text-sm rounded-md hover:opacity-90 transition"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}