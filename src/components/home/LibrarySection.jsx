"use client";

import { useEffect, useMemo, useState } from "react";
import { getAllWorkouts } from "@/lib/api";
import WorkoutCard from "@/components/workout/WorkoutCard";
import SortDropdown from "./SortDropdown";
import LibrarySkeleton from "./LibrarySkeleton";

export default function LibrarySection() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("duration");
  const [query, setQuery] = useState("");

  useEffect(() => {
    let mounted = true;
    getAllWorkouts()
      .then((data) => {
        if (!mounted) return;
        setWorkouts(Array.isArray(data) ? data : []);
      })
      .catch((e) => mounted && setError(e.message))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const filtered = useMemo(() => {
    let list = [...workouts];

    // Search by name, muscleGroups, or equipment
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (w) =>
          w.name?.toLowerCase().includes(q) ||
          w.muscleGroups?.some((m) => m.toLowerCase().includes(q)) ||
          w.equipment?.toLowerCase().includes(q)
      );
    }

    // Sort — handles the "calories" → "caloriesBurned" mapping
    const sortKey = sortBy === "calories" ? "caloriesBurned" : sortBy;
    list.sort((a, b) => (Number(a[sortKey]) || 0) - (Number(b[sortKey]) || 0));

    return list;
  }, [workouts, sortBy, query]);

  return (
    <section id="library" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase">
            The Library
          </h2>
          <p className="text-muted mt-2 text-sm">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search workouts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-surface border border-border rounded-md px-4 py-2 text-sm text-text focus:outline-none focus:border-accent w-full sm:w-56"
          />
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>
      </div>

      {loading && <LibrarySkeleton />}
      {error && <p className="text-red-400">Error: {error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((w) => (
            <WorkoutCard key={w.id} workout={w} />
          ))}
        </div>
      )}
    </section>
  );
}