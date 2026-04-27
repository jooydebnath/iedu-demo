"use client";

import { useEffect, useState } from "react";

/**
 * Renders `fallback` until the component has mounted on the client and an
 * optional `delay` (ms) has elapsed — useful for showing skeleton placeholders
 * to simulate dynamic loading on otherwise static client sections.
 */
export default function ClientGate({
  fallback,
  delay = 500,
  children,
}: {
  fallback: React.ReactNode;
  delay?: number;
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return <>{ready ? children : fallback}</>;
}
