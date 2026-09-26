import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import TagPill from "@/components/ui/TagPill";
import SpecsTable from "@/components/workout/SpecsTable";
import InstructionList from "@/components/workout/InstructionList";
import ActionButtons from "@/components/workout/ActionButtons";

export default async function WorkoutDetailPage({ params }) {
  const { id } = await params;

  let workout;
  try {
    workout = await getWorkoutById(id);
  } catch {
    notFound();
  }
  if (!workout) notFound();

  const categories = Array.isArray(workout.category)
    ? workout.category
    : [workout.category].filter(Boolean);

  const instructions = Array.isArray(workout.instructions)
    ? workout.instructions
    : typeof workout.instructions === "string"
      ? workout.instructions.split("\n").filter(Boolean)
      : [];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={workout.image}
            alt={workout.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right info */}
        <div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight">
            {workout.name}
          </h1>
          <p className="text-muted mt-4 text-sm leading-relaxed">
            {workout.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((c) => (
              <TagPill key={c}>{c}</TagPill>
            ))}
          </div>

          <div className="mt-8">
            <SpecsTable workout={workout} />
          </div>

          {instructions.length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-lg uppercase tracking-widest mb-4">
                Instructions
              </h2>
              <InstructionList instructions={instructions} />
            </div>
          )}

          <ActionButtons workout={workout} />
        </div>
      </div>
    </section>
  );
}