import Link from "next/link";

export default function WorkoutNotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="font-display text-4xl font-bold text-accent uppercase">
          Workout not found
        </h2>
        <p className="text-muted mt-2">
          That lift doesn&apos;t exist in our library.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-accent text-bg font-bold tracking-widest text-sm rounded-md hover:opacity-90 transition"
        >
          BACK TO LIBRARY
        </Link>
      </div>
    </div>
  );
}