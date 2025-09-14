"use client";

import React, { useState, useEffect } from "react";
import { mockTestimonials } from "@/lib/mockData";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % mockTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + mockTestimonials.length) % mockTestimonials.length
    );
  };

  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // 10초 후 다시 자동 재생
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeTestimonial = mockTestimonials[currentIndex];

  return (
    <section 
      className="section relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to top, #f3f4f6, white)`,
      }}
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-foreground mb-4">
            환자분들이 전하는 이야기
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            맨즈 솔루션에서 건강을 되찾으신 분들의 진솔한 후기가
            <br className="hidden sm:block" />
            당신의 용기 있는 첫걸음에 힘이 되어 드립니다.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="relative bg-white p-8 sm:p-8 rounded-xl shadow-lg overflow-hidden">
            <Quote className="absolute top-4 right-4 text-gray-100" size={80} />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-h3 font-bold text-foreground">
                    {activeTestimonial.name} ({activeTestimonial.age}세)
                  </h3>
                  <p className="text-primary font-medium">
                    {activeTestimonial.treatment}
                  </p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < activeTestimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>

              <p className="text-lg text-muted leading-relaxed mb-6">
                "{activeTestimonial.content}"
              </p>

              <p className="text-sm text-gray-400 text-right">
                {activeTestimonial.date}
              </p>
            </div>
          </div>

          {/* 컨트롤러 */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => { handleUserInteraction(); prevTestimonial(); }}
              className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
              aria-label="이전 후기"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* 인디케이터 */}
            <div className="flex gap-2">
              {mockTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { handleUserInteraction(); setCurrentIndex(index); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'w-6 bg-primary' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`후기 ${index + 1}으로 이동`}
                />
              ))}
            </div>

            <button
              onClick={() => { handleUserInteraction(); nextTestimonial(); }}
              className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
              aria-label="다음 후기"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}