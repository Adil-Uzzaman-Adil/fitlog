import { FiClock, FiZap, FiStar } from "react-icons/fi";

export default function StatRow({ duration, calories, rating }) {
  return (
    <div className="flex items-center gap-4 text-xs text-muted mt-3">
      <span className="flex items-center gap-1">
        <FiClock className="text-accent" /> {duration} min
      </span>
      <span className="flex items-center gap-1">
        <FiZap className="text-accent" /> {calories} kcal
      </span>
      <span className="flex items-center gap-1">
        <FiStar className="text-accent" /> {rating}
      </span>
    </div>
  );
}