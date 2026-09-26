"use client";

import toast from "react-hot-toast";
import { FiPlus, FiBookmark, FiCheck } from "react-icons/fi";
import { useFitLog } from "@/context/FitLogContext";

export default function ActionButtons({ workout }) {
  const { addToPlan, toggleSave, isInPlan, isSaved, plan } = useFitLog();

  const inPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);
  const planFull = plan.length >= 5;

  const handleAdd = () => {
    if (inPlan) {
      toast.error("Already in today's plan");
      return;
    }
    if (planFull) {
      toast.error("Plan is full (max 5 lifts)");
      return;
    }
    const ok = addToPlan(workout);
    if (ok) toast.success("Added to today's plan");
  };

  const handleSave = () => {
    const added = toggleSave(workout);
    toast.success(added ? "Saved for later" : "Removed from saved");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-6">
      <button
        onClick={handleAdd}
        disabled={inPlan || planFull}
        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-bg font-bold tracking-widest text-sm rounded-md hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {inPlan ? <FiCheck /> : <FiPlus />}
        {inPlan ? "IN TODAY'S PLAN" : planFull ? "PLAN FULL" : "ADD TO TODAY'S PLAN"}
      </button>

      <button
        onClick={handleSave}
        className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border font-bold tracking-widest text-sm rounded-md transition ${
          saved
            ? "border-accent text-accent"
            : "border-border text-text hover:border-accent"
        }`}
      >
        <FiBookmark />
        {saved ? "SAVED" : "SAVE FOR LATER"}
      </button>
    </div>
  );
}