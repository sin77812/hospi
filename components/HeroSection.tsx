"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronDown,
  Calendar,
  Stethoscope,
  Briefcase,
  Users,
  Smile,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative flex items-end"
      style={{
        backgroundImage: `url('/images/hero-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
        paddingTop: "var(--space-2xl)",
        paddingBottom: "var(--space-2xl)",
      }}
    >
      <div className="container">
        <div className="max-w-2xl text-left">
          <p
            className="text-gray-200 animate-slide-up"
            style={{
              fontSize: "var(--step-1)",
              lineHeight: "1.6",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
              marginBottom: "var(--space-xl)",
            }}
          >
            맨즈 솔루션이 당신의 자신감을 되찾아 드립니다.
            <br />
            20년 경력의 전문 의료진이 최상의 의료 서비스를 제공합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-scale-in">
            <Link href="#booking" className="btn-primary flex items-center justify-center gap-2">
              <Calendar size={20} />
              온라인 예약
            </Link>
            <Link href="#departments" className="btn-secondary flex items-center justify-center gap-2">
              <Stethoscope size={20} />
              진료과목 보기
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-white animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-2">
              <Briefcase size={24} className="text-primary" />
            </div>
            <div className="flex items-center gap-2">
              <Users size={24} className="text-primary" />
            </div>
            <div className="flex items-center gap-2">
              <Smile size={24} className="text-primary" />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
        aria-label="아래로 스크롤"
      >
        <ChevronDown size={28} className="text-white" />
      </button>
    </section>
  );
}
