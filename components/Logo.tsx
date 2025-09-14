"use client";

import React from "react";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`font-suit font-bold ${className}`}>
      <span className="text-2xl text-primary">맨즈</span>
      <span className="text-2xl text-foreground">솔루션</span>
    </div>
  );
}