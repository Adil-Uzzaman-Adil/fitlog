import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="text-center py-20 border border-dashed border-border rounded-xl">
      <h3 className="font-display text-2xl uppercase tracking-widest">
        Nothing here yet
      </h3>
      <p className="text-muted mt-2 text-sm">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="inline-block mt-6 px-6 py-3 bg-accent text-bg font-bold tracking-widest text-sm rounded-md hover:opacity-90 transition"
      >
        GO TO WORKOUTS
      </Link>
    </div>
  );
}
