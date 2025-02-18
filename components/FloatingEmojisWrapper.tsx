"use client";

import dynamic from "next/dynamic";

// Dynamically import the client-only component
const FloatingEmojis = dynamic(() => import("./FloatingEmojis"), {
  ssr: false,
});

export default function FloatingEmojisWrapper() {
  return <FloatingEmojis />;
}
