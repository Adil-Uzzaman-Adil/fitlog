import Link from "next/link";
import Image from "next/image";
import TagPill from "@/components/ui/TagPill";
import StatRow from "@/components/ui/StatRow";

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block bg-surface rounded-2xl overflow-hidden border border-border hover:border-accent transition"
    >
      <div className="relative aspect-[16/10] bg-surface2 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={workout.image}
          alt={workout.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {(Array.isArray(workout.category)
            ? workout.category
            : [workout.category]
          ).map((c) => (
            <TagPill key={c}>{c}</TagPill>
          ))}
        </div>
        <h3 className="font-display font-semibold text-base uppercase tracking-wide text-text">
          {workout.name}
        </h3>
        <p className="text-xs text-muted mt-1">{workout.equipment}</p>
        <StatRow
          duration={workout.duration}
          calories={workout.calories}
          rating={workout.rating}
        />
      </div>
    </Link>
  );
}