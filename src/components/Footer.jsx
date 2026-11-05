import React from "react";

export function Footer({ brandName }) {
  return (
    <footer className="relative mt-16 w-full max-w-md text-center animate-fadeUp delay-500 z-10">
      {/* Top divider */}
      <div className="thread-line w-full mb-6 mx-auto" aria-hidden="true" />

      <p className="text-xs font-medium tracking-wider uppercase" style={{ color: "var(--color-paper-2)" }}>
        Powered by <span style={{ color: "var(--color-thread)" }}>{brandName}</span>
      </p>

      <p className="mt-6 text-[11px] font-mono tracking-wider" style={{ color: "rgba(235,235,235,0.35)" }}>
        Tap a card above to connect.
      </p>
    </footer>
  );
}