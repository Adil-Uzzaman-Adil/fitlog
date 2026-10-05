"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiPlus, FiBookmark, FiCheck } from "react-icons/fi";

export default function ActionButtons({ workout }) {
  const [inPlan, setInPlan] = useState(false);
  const [saved, setSaved] = useState(false);
  const [planFull, setPlanFull] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    try {
      const plan = JSON.parse(localStorage.getItem("fitlog_plan") || "[]");
      const savedList = JSON.parse(localStorage.getItem("fitlog_saved") || "[]");
      setInPlan(plan.some((w) => w.id === workout.id));
      setSaved(savedList.some((w) => w.id === workout.id));
      setPlanFull(plan.length >= 5);
    } catch (e) {
      console.error(e);
    }
  }, [workout.id]);

  const handleAdd = () => {
    if (inPlan) {
      toast.error("Already in today's plan");
      return;
    }
    if (planFull) {
      toast.error("Plan is full (max 5 lifts)");
      return;
    }

    try {
      const plan = JSON.parse(localStorage.getItem("fitlog_plan") || "[]");
      plan.push({ ...workout, done: false });
      localStorage.setItem("fitlog_plan", JSON.stringify(plan));

      setInPlan(true);
      setPlanFull(plan.length >= 5);
      toast.success("Added to today's plan");
    } catch (e) {
      toast.error("Failed to add");
    }
  };

  const handleSave = () => {
    try {
      const savedList = JSON.parse(localStorage.getItem("fitlog_saved") || "[]");
      const exists = savedList.some((w) => w.id === workout.id);

      let newList;
      if (exists) {
        newList = savedList.filter((w) => w.id !== workout.id);
        toast.success("Removed from saved");
      } else {
        newList = [...savedList, workout];
        toast.success("Saved for later");
      }

      localStorage.setItem("fitlog_saved", JSON.stringify(newList));
      setSaved(!exists);
    } catch (e) {
      toast.error("Failed to save");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-6">
      <button
        onClick={handleAdd}
        disabled={inPlan || planFull}
        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-bg font-bold tracking-widest text-sm rounded-md hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {inPlan ? <FiCheck /> : <FiPlus />}
        {inPlan
          ? "IN TODAY'S PLAN"
          : planFull
            ? "PLAN FULL"
            : "ADD TO TODAY'S PLAN"}
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