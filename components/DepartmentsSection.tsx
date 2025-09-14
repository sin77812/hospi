"use client";

import React, { useRef } from "react";
import { departments } from "@/lib/mockData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { iconComponents } from "@/components/MedicalIcons";

export function DepartmentsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="departments" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-foreground mb-4">
            전문 진료과목
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            맨즈 솔루션은 남성 건강에 대한 깊이 있는 이해를 바탕으로
            체계적이고 전문적인 진료과목을 운영합니다.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 p-2"
            style={{ transform: 'translateY(-50%)' }}
            aria-label="이전"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 p-2"
            style={{ transform: 'translateY(-50%)' }}
            aria-label="다음"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={scrollRef}
            className="departments-grid"
            style={{ 
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth'
            }}
          >
            {departments.map((dept) => {
              const IconComponent = iconComponents[dept.id as keyof typeof iconComponents];
              return (
                <div
                  key={dept.id}
                  className="card cursor-pointer p-6 text-center flex flex-col items-center"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="mb-4">
                    <IconComponent />
                  </div>
                  <h3 className="text-h4 font-bold text-foreground mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-muted text-sm mb-4 flex-grow">
                    {dept.description}
                  </p>
                  <span className="text-primary font-medium text-sm hover:underline">
                    자세히 보기 →
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- '모든 진료과목 보기' 버튼: lg 사이즈 이상에서 숨김 --- */}
        <div className="text-center mt-12 lg:hidden">
          <button className="text-primary font-medium hover:underline">
            모든 진료과목 보기
          </button>
        </div>
      </div>
    </section>
  );
}