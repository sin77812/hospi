"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Briefcase, Users, Smile } from "lucide-react";

// ... (Counter 컴포넌트는 기존과 동일하게 유지)
interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function Counter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startCount = 0;

    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startCount + (end - startCount) * easeOut);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  return (
    <div 
      ref={ref} 
      className="font-bold"
      style={{
        fontSize: 'var(--step-2)', // 숫자 크기 조정
        color: 'var(--primary)',
      }}
    >
      {count.toLocaleString()}{suffix}
    </div>
  );
}


export function AboutSection() {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* 왼쪽: 이미지 영역 */}
          <div className="hidden lg:block rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/doctor2.png" // 임시로 의사 이미지를 사용합니다.
              alt="맨즈 솔루션 병원 내부"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* 오른쪽: 텍스트 및 통계 영역 */}
          <div className="text-center lg:text-left">
            <h2 
              className="text-h3 font-bold text-foreground" 
              style={{ marginBottom: 'var(--space-m)' }}
            >
              20년 경력의 노하우,
              <br />
              맨즈 솔루션이 함께합니다.
            </h2>
            <p 
              className="text-base text-muted" 
              style={{ 
                lineHeight: '1.7',
                marginBottom: 'var(--space-xl)',
              }}
            >
              맨즈 솔루션은 남성 건강 문제에 대한 깊은 이해와 풍부한 임상 경험을 바탕으로, 단순한 치료를 넘어 환자 개개인의 삶의 질을 높이는 것을 목표로 합니다. 최신 의료 기술과 환자 중심의 따뜻한 진료로 신뢰할 수 있는 의료 서비스를 제공합니다.
            </p>
            
            {/* 새로운 통계 카드 디자인 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="card text-center p-4">
                <Briefcase className="mx-auto mb-2 text-primary" size={32} />
                <Counter end={20} suffix="+" />
                <p className="text-muted text-xs">년의 임상 경험</p>
              </div>
              <div className="card text-center p-4">
                <Users className="mx-auto mb-2 text-primary" size={32} />
                <Counter end={50000} suffix="+" />
                <p className="text-muted text-xs">명의 누적 환자</p>
              </div>
              <div className="card text-center p-4">
                <Smile className="mx-auto mb-2 text-primary" size={32} />
                <Counter end={98} suffix="%" />
                <p className="text-muted text-xs">높은 환자 만족도</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}