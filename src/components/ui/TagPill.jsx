export default function TagPill({ children }) {
  return (
    <span className="inline-block px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold tracking-widest uppercase">
      {children}
    </span>
  );
}