"use client";

import React from "react";

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Logo({ className = "", style }: LogoProps) {
  return (
    <div className={`font-suit font-bold ${className}`} style={style}>
      <span className="text-2xl text-primary">맨즈</span>
      <span className="text-2xl text-foreground">솔루션</span>
    </div>
  );
}