"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FitLogContext = createContext();

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const p = JSON.parse(localStorage.getItem("fitlog_plan") || "[]");
      const s = JSON.parse(localStorage.getItem("fitlog_saved") || "[]");
      setPlan(p);
      setSaved(s);
    } catch (e) {
      console.error(e);
    }
    setHydrated(true);
  }, []);

  // Persist
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("fitlog_plan", JSON.stringify(plan));
  }, [plan, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("fitlog_saved", JSON.stringify(saved));
  }, [saved, hydrated]);

  const isInPlan = (id) => plan.some((w) => w.id === id);
  const isSaved = (id) => saved.some((w) => w.id === id);

  const addToPlan = (workout) => {
    if (isInPlan(workout.id)) return false;
    if (plan.length >= 5) return false;
    setPlan((prev) => [...prev, { ...workout, done: false }]);
    return true;
  };

  const removeFromPlan = (id) => {
    setPlan((prev) => prev.filter((w) => w.id !== id));
  };

  const markAsDone = (id) => {
    setPlan((prev) =>
      prev.map((w) => (w.id === id ? { ...w, done: !w.done } : w))
    );
  };

  const toggleSave = (workout) => {
    if (isSaved(workout.id)) {
      setSaved((prev) => prev.filter((w) => w.id !== workout.id));
      return false;
    }
    setSaved((prev) => [...prev, workout]);
    return true;
  };

  // Metrics — uses caloriesBurned now
  const metrics = {
    exercises: plan.length,
    minutes: plan.reduce((sum, w) => sum + (Number(w.duration) || 0), 0),
    calories: plan.reduce(
      (sum, w) => sum + (Number(w.caloriesBurned) || 0),
      0
    ),
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        metrics,
        addToPlan,
        removeFromPlan,
        markAsDone,
        toggleSave,
        isInPlan,
        isSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const ctx = useContext(FitLogContext);
  if (!ctx) throw new Error("useFitLog must be used within FitLogProvider");
  return ctx;
}