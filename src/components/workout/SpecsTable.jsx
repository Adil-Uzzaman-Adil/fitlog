export default function SpecsTable({ workout }) {
  const rows = [
    ["EQUIPMENT", workout.equipment],
    ["DIFFICULTY", workout.difficulty],
    ["SETS", workout.sets],
    ["REPS", workout.reps],
    ["DURATION", `${workout.duration} min`],
    ["CALORIES", `${workout.caloriesBurned} kcal`],
    ["RATING", workout.rating],
  ];

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden">
      {rows.map(([label, value], i) => (
        <div
          key={label}
          className={`flex items-center justify-between px-4 py-3 text-sm ${
            i !== rows.length - 1 ? "border-b border-border" : ""
          }`}
        >
          <span className="text-muted tracking-widest text-xs uppercase">
            {label}
          </span>
          <span className="font-medium text-text">{value || "—"}</span>
        </div>
      ))}
    </div>
  );
}