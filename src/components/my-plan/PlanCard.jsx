"use client";

import Link from "next/link";
import { FiCheck, FiX } from "react-icons/fi";
import StatRow from "@/components/ui/StatRow";
import { useFitLog } from "@/context/FitLogContext";
import toast from "react-hot-toast";

export default function PlanCard({ workout, mode }) {
  const { removeFromPlan, markAsDone } = useFitLog();

  const handleRemove = () => {
    removeFromPlan(workout.id);
    toast.success("Removed from plan");
  };

  const handleDone = () => {
    markAsDone(workout.id);
    toast.success(workout.done ? "Marked as not done" : "Marked as done");
  };

  return (
    <div
      className={`bg-surface border border-border rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center transition ${
        workout.done ? "opacity-60" : ""
      }`}
    >
      {/* Thumbnail */}
      <div className="w-full sm:w-32 aspect-video sm:aspect-square rounded-lg overflow-hidden bg-surface2 flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={workout.image}
          alt={workout.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3
          className={`font-display font-semibold uppercase tracking-wide ${
            workout.done ? "line-through text-muted" : ""
          }`}
        >
          {workout.name}
        </h3>
        <p className="text-xs text-muted mt-1">{workout.equipment}</p>
        <StatRow
          duration={workout.duration}
          calories={workout.caloriesBurned}
          rating={workout.rating}
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <Link
          href={`/workout/${workout.id}`}
          className="px-3 py-2 text-xs font-bold tracking-widest border border-border rounded-md hover:border-accent transition"
        >
          VIEW
        </Link>

        {mode === "plan" && (
          <button
            onClick={handleDone}
            className={`p-2 rounded-md border transition ${
              workout.done
                ? "border-accent text-accent"
                : "border-border hover:border-accent"
            }`}
            title="Mark as done"
          >
            <FiCheck />
          </button>
        )}

        <button
          onClick={handleRemove}
          className="p-2 rounded-md border border-border hover:border-red-500 hover:text-red-500 transition"
          title="Remove"
        >
          <FiX />
        </button>
      </div>
    </div>
  );
}

