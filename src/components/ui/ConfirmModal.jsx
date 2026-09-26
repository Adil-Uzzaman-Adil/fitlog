"use client";

import { FiAlertTriangle } from "react-icons/fi";

export default function ConfirmModal({
  open,
  title = "Are you sure?",
  message = "This action cannot be undone.",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onCancel}
      />
      <div className="relative bg-surface border border-border rounded-2xl p-6 max-w-sm w-full">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center">
            <FiAlertTriangle />
          </span>
          <h3 className="font-display text-lg uppercase tracking-widest">
            {title}
          </h3>
        </div>
        <p className="text-muted text-sm mt-4">{message}</p>
        <div className="flex gap-3 mt-6">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 border border-border rounded-md text-sm font-bold tracking-widest hover:border-accent transition"
          >
            {cancelLabel.toUpperCase()}
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md text-sm font-bold tracking-widest hover:opacity-90 transition"
          >
            {confirmLabel.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
}