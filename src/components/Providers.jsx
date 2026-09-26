"use client";

import { FitLogProvider } from "@/context/FitLogContext";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <FitLogProvider>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#141414",
            color: "#f5f5f5",
            border: "1px solid #262626",
          },
          success: {
            iconTheme: { primary: "#ccff00", secondary: "#0a0a0a" },
          },
        }}
      />
    </FitLogProvider>
  );
}