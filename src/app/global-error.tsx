"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-[#08080a] text-[#f4f4f6] flex flex-col items-center justify-center min-h-full p-6 font-sans">
        <div className="max-w-md text-center space-y-6">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto">
            <span className="text-red-500 font-bold text-xl">!</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-white tracking-tight">
              A critical error occurred
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Something went wrong in the core layout rendering. You can try refreshing or resetting the application state.
            </p>
            {error.digest && (
              <p className="text-[10px] font-mono text-zinc-600 mt-2">
                Error Digest: {error.digest}
              </p>
            )}
          </div>
          <button
            onClick={() => reset()}
            className="px-4 py-2 rounded-xl bg-white text-black hover:bg-zinc-200 transition-colors text-xs font-semibold shadow-md cursor-pointer"
          >
            Reset Application
          </button>
        </div>
      </body>
    </html>
  );
}
