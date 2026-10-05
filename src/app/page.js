"use client";

import { useEffect, useMemo, useState } from "react";

export default function MyPlanPage() {
  const [mounted, setMounted] = useState(false);
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [tab, setTab] = useState("plan");
  const [query, setQuery] = useState("");

  useEffect(() => {
    setMounted(true);
    try {
      const p = JSON.parse(localStorage.getItem("fitlog_plan") || "[]");
      const s = JSON.parse(localStorage.getItem("fitlog_saved") || "[]");
      setPlan(p);
      setSaved(s);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("fitlog_plan", JSON.stringify(plan));
  }, [plan, mounted]);


  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("fitlog_saved", JSON.stringify(saved));
  }, [saved, mounted]);

  const list = tab === "plan" ? plan : saved;

  const filtered = useMemo(() => {
    if (!query.trim()) return list;
    const q = query.toLowerCase();
    return list.filter(
      (w) =>
        w.name?.toLowerCase().includes(q) ||
        w.muscleGroups?.some((m) => m.toLowerCase().includes(q)) ||
        w.equipment?.toLowerCase().includes(q)
    );
  }, [list, query]);

  const metrics = {
    exercises: plan.length,
    minutes: plan.reduce((s, w) => s + (Number(w.duration) || 0), 0),
    calories: plan.reduce((s, w) => s + (Number(w.caloriesBurned) || 0), 0),
  };

  const removeFromPlan = (id) => setPlan((p) => p.filter((w) => w.id !== id));
  const markAsDone = (id) =>
    setPlan((p) => p.map((w) => (w.id === id ? { ...w, done: !w.done } : w)));
  const removeFromSaved = (id) => setSaved((s) => s.filter((w) => w.id !== id));

  if (!mounted) {
    return (
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="h-10 w-48 bg-surface rounded animate-pulse" />
        <div className="grid grid-cols-3 gap-4 my-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-surface rounded-xl animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase">
        My Plan
      </h1>
      <p className="text-muted mt-2 text-sm">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 sm:gap-6 my-8">
        {[
          { label: "Exercises", value: metrics.exercises },
          { label: "Minutes", value: metrics.minutes },
          { label: "Calories", value: metrics.calories },
        ].map((m) => (
          <div
            key={m.label}
            className="bg-surface border border-border rounded-xl p-4 sm:p-6 text-center"
          >
            <p className="font-display text-3xl sm:text-4xl font-bold">
              {m.value}
            </p>
            <p className="text-xs sm:text-sm text-muted tracking-widest uppercase mt-1">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      {/* Tabs + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border">
        <div className="flex gap-2">
          <button
            onClick={() => setTab("plan")}
            className={`px-4 py-3 text-xs sm:text-sm font-bold tracking-widest border-b-2 -mb-px transition ${
              tab === "plan"
                ? "border-accent text-accent"
                : "border-transparent text-muted hover:text-text"
            }`}
          >
            TODAY&apos;S PLAN ({plan.length})
          </button>
          <button
            onClick={() => setTab("saved")}
            className={`px-4 py-3 text-xs sm:text-sm font-bold tracking-widest border-b-2 -mb-px transition ${
              tab === "saved"
                ? "border-accent text-accent"
                : "border-transparent text-muted hover:text-text"
            }`}
          >
            SAVED ({saved.length})
          </button>
        </div>
        <div className="py-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or tag..."
            className="w-full sm:w-64 bg-surface border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      {/* List */}
      <div className="mt-6 space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border rounded-xl">
            <h3 className="font-display text-2xl uppercase tracking-widest">
              Nothing here yet
            </h3>
            <p className="text-muted mt-2 text-sm">
              Browse the library and add a lift to get today moving.
            </p>
            <a
              href="/"
              className="inline-block mt-6 px-6 py-3 bg-accent text-bg font-bold tracking-widest text-sm rounded-md hover:opacity-90"
            >
              GO TO WORKOUTS
            </a>
          </div>
        ) : (
          filtered.map((w) => (
            <div
              key={w.id}
              className={`bg-surface border border-border rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center ${
                w.done ? "opacity-60" : ""
              }`}
            >
              <div className="w-full sm:w-32 aspect-video sm:aspect-square rounded-lg overflow-hidden bg-surface2 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.image}
                  alt={w.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className={`font-display font-semibold uppercase tracking-wide ${
                    w.done ? "line-through text-muted" : ""
                  }`}
                >
                  {w.name}
                </h3>
                <p className="text-xs text-muted mt-1">{w.equipment}</p>
                <div className="flex items-center gap-4 text-xs text-muted mt-3">
                  <span>⏱ {w.duration} min</span>
                  <span>⚡ {w.caloriesBurned} kcal</span>
                  <span>⭐ {w.rating}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={`/workout/${w.id}`}
                  className="px-3 py-2 text-xs font-bold tracking-widest border border-border rounded-md hover:border-accent transition"
                >
                  VIEW
                </a>
                {tab === "plan" && (
                  <button
                    onClick={() => markAsDone(w.id)}
                    className={`p-2 rounded-md border transition ${
                      w.done
                        ? "border-accent text-accent"
                        : "border-border hover:border-accent"
                    }`}
                    title="Mark as done"
                  >
                    ✓
                  </button>
                )}
                <button
                  onClick={() =>
                    tab === "plan" ? removeFromPlan(w.id) : removeFromSaved(w.id)
                  }
                  className="p-2 rounded-md border border-border hover:border-red-500 hover:text-red-500 transition"
                  title="Remove"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}