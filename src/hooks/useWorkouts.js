"use client";

import { useEffect, useState } from "react";
import { getAllWorkouts } from "@/lib/api";

export default function useWorkouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    getAllWorkouts()
      .then((data) => {
        if (!mounted) return;
        setWorkouts(Array.isArray(data) ? data : data.workouts || []);
      })
      .catch((e) => mounted && setError(e.message))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return { workouts, loading, error };
}