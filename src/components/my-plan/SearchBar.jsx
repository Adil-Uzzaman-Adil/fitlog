"use client";

import { FiSearch } from "react-icons/fi";

export default function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="relative w-full sm:w-64">
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-surface border border-border rounded-md pl-10 pr-4 py-2 text-sm text-text focus:outline-none focus:border-accent"
      />
    </div>
  );
}