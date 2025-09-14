"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero-bg.png')`
      }}
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            남성의 건강,
            <br />
            <span className="text-primary">맨즈 솔루션</span>에서 시작하세요
          </h1>
          
          <p className="text-lg md:text-xl text-muted mb-8 animate-slide-up">
            20년 경력의 전문 의료진이 제공하는
            <br />
            체계적이고 전문적인 비뇨기과 진료
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link href="#booking" className="btn-primary">
              지금 예약하기
            </Link>
            <Link href="#departments" className="btn-secondary">
              진료과목 보기
            </Link>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => {
          const element = document.getElementById("about");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-muted" />
      </button>
    </section>
  );
}