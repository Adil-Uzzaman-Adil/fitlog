"use client";

import { FiChevronDown } from "react-icons/fi";

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-surface border border-border rounded-md pl-4 pr-10 py-2 text-sm text-text focus:outline-none focus:border-accent cursor-pointer"
      >
        <option value="duration">Sort by Duration</option>
        <option value="calories">Sort by Calories</option>
        <option value="rating">Sort by Rating</option>
      </select>
      <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
    </div>
  );
}