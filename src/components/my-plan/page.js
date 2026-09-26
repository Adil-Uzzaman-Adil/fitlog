"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { FiX } from "react-icons/fi";
import { useFitLog } from "@/context/FitLogContext";
import MetricsRow from "@/components/my-plan/MetricsRow";
import PlanTabs from "@/components/my-plan/PlanTabs";
import EmptyState from "@/components/my-plan/EmptyState";
import PlanCard from "@/components/my-plan/PlanCard";
import PlanSkeleton from "@/components/my-plan/PlanSkeleton";
import SearchBar from "@/components/my-plan/SearchBar";
import StatRow from "@/components/ui/StatRow";

export default function MyPlanPage() {
  const { plan, saved, metrics, toggleSave } = useFitLog();
  const [tab, setTab] = useState("plan");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

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

  const handleRemoveSaved = (workout) => {
    toggleSave(workout);
    toast.success("Removed from saved");
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase">
        My Plan
      </h1>
      <p className="text-muted mt-2 text-sm">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <MetricsRow metrics={metrics} />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border">
        <PlanTabs
          active={tab}
          onChange={setTab}
          planCount={plan.length}
          savedCount={saved.length}
        />
        <div className="py-2">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search by name or tag..."
          />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {loading ? (
          <PlanSkeleton />
        ) : filtered.length === 0 ? (
          <EmptyState />
        ) : tab === "plan" ? (
          filtered.map((w) => <PlanCard key={w.id} workout={w} mode="plan" />)
        ) : (
          filtered.map((w) => (
            <div
              key={w.id}
              className="bg-surface border border-border rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
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
                <h3 className="font-display font-semibold uppercase tracking-wide">
                  {w.name}
                </h3>
                <p className="text-xs text-muted mt-1">{w.equipment}</p>
                <StatRow
                  duration={w.duration}
                  calories={w.caloriesBurned}
                  rating={w.rating}
                />
              </div>
              <button
                onClick={() => handleRemoveSaved(w)}
                className="p-2 rounded-md border border-border hover:border-red-500 hover:text-red-500 transition"
                title="Remove"
              >
                <FiX />
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}


