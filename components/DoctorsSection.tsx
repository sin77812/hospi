"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { mockDoctors } from "@/lib/mockData";
import { GraduationCap, Award } from "lucide-react";

interface DoctorCardProps {
  doctor: typeof mockDoctors[0];
  index: number;
}

function DoctorCard({ doctor, index }: DoctorCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative rounded-xl overflow-hidden group transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Image
        src={doctor.image}
        alt={`${doctor.name} 의료진`}
        width={400}
        height={500}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* 정보 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-h3 font-bold">{doctor.name}</h3>
          <p className="text-primary font-medium text-lg">{doctor.title}</p>
          <p className="text-gray-300">{doctor.specialty}</p>
        </div>
      </div>
      {/* 호버 시 나타나는 상세 정보 */}
      <div className="absolute inset-0 bg-black/90 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
          <GraduationCap size={24} className="text-primary" />
          학력 및 경력
        </h4>
        <ul className="space-y-2 text-sm text-gray-300 flex-grow">
          {doctor.education.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
        <div className="text-sm flex items-center gap-2 mt-4">
          <Award size={20} className="text-primary" />
          <span>경력 {doctor.experience}</span>
        </div>
      </div>
    </div>
  );
}

export function DoctorsSection() {
  return (
    <section id="doctors" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-foreground mb-4">
            맨즈 솔루션 의료진
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            풍부한 경험과 전문성을 갖춘 의료진이 책임감을 가지고 진료하며,
            언제나 환자의 입장에서 생각하고 소통합니다.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {mockDoctors.map((doctor, index) => (
            <div key={doctor.id} className="w-full sm:w-1/2 lg:w-1/3 max-w-sm">
              <DoctorCard doctor={doctor} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}