"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="font-display text-4xl font-bold text-accent uppercase">
          Something went wrong
        </h2>
        <p className="text-muted mt-3 text-sm">
          {error?.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="mt-6 px-6 py-3 bg-accent text-bg font-bold tracking-widest text-sm rounded-md hover:opacity-90 transition"
        >
          TRY AGAIN
        </button>
      </div>
    </div>
  );
}