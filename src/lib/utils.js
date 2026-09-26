export function formatNumber(n) {
  return new Intl.NumberFormat("en-US").format(n);
}

export function sortWorkouts(list, key = "duration", dir = "asc") {
  const sorted = [...list].sort(
    (a, b) => (Number(a[key]) || 0) - (Number(b[key]) || 0)
  );
  return dir === "asc" ? sorted : sorted.reverse();
}

export function truncate(str, len = 100) {
  if (!str) return "";
  return str.length > len ? `${str.slice(0, len)}…` : str;
}

export function normalizeCategories(cat) {
  if (Array.isArray(cat)) return cat.filter(Boolean);
  if (typeof cat === "string") return cat.split(",").map((c) => c.trim());
  return [];
}

export function normalizeInstructions(ins) {
  if (Array.isArray(ins)) return ins.filter(Boolean);
  if (typeof ins === "string")
    return ins.split("\n").map((s) => s.trim()).filter(Boolean);
  return [];
}