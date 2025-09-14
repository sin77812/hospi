"use client";

import React from "react";
import { mockDoctors } from "@/lib/mockData";
import { GraduationCap, Award } from "lucide-react";

export function DoctorsSection() {
  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            의료진 소개
          </h2>
          <p className="text-lg text-muted">
            풍부한 경험과 전문성을 갖춘 의료진이 함께합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {mockDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">👨‍⚕️</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">{doctor.title}</p>
                    <p className="text-muted mb-4">{doctor.specialty}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Award size={16} />
                      <span>경력 {doctor.experience}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-start gap-2 mb-3">
                    <GraduationCap size={18} className="text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-2">학력 및 경력</h4>
                      <ul className="space-y-1">
                        {doctor.education.map((item, index) => (
                          <li key={index} className="text-sm text-muted">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}