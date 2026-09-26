export default function InstructionList({ instructions = [] }) {
  if (!instructions.length) return null;
  return (
    <ol className="space-y-3">
      {instructions.map((step, i) => (
        <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-bg text-xs font-bold flex items-center justify-center">
            {i + 1}
          </span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}