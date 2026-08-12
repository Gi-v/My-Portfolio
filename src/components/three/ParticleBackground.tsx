"use client";
import { useEffect, useRef } from "react";

// Aurora gradient mesh + subtle particles
export default function AuroraBackground() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora-blob w-[700px] h-[700px] bg-blue-200/60 top-[-10%] left-[-5%]" style={{ animationDelay:"0s" }} />
      <div className="aurora-blob w-[500px] h-[500px] bg-violet-200/50 top-[20%] right-[-5%]" style={{ animationDelay:"-7s" }} />
      <div className="aurora-blob w-[400px] h-[400px] bg-sky-200/40 bottom-[10%] left-[20%]" style={{ animationDelay:"-14s" }} />
      <div className="aurora-blob w-[300px] h-[300px] bg-indigo-200/40 top-[50%] right-[30%]" style={{ animationDelay:"-4s" }} />
    </div>
  );
}
