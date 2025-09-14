"use client";

import React from "react";
import { Logo } from "./Logo";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer 
      className="bg-gray-900 text-white"
      style={{ padding: 'var(--space-2xl) 0' }}
    >
      <div className="container">
        <div 
          className="grid-auto-fit"
          style={{
            '--grid-min': '280px',
            '--gap': 'var(--space-l)'
          } as React.CSSProperties}
        >
          {/* 로고 및 소개 */}
          <div>
            <Logo 
              className="text-white" 
              style={{ marginBottom: 'var(--space-s)' }}
            />
            <p 
              className="text-gray-400"
              style={{ 
                fontSize: 'var(--step-0)',
                lineHeight: '1.6',
                marginBottom: 'var(--space-s)',
                maxWidth: '40ch'
              }}
            >
              맨즈 솔루션은 남성 건강을 위한 전문 비뇨기과입니다.
              <br />
              20년의 풍부한 경험과 최신 의료 장비로 최상의 진료를 제공합니다.
            </p>
          </div>

          {/* 진료 시간 */}
          <div>
            <h3 
              className="font-semibold text-white flex items-center"
              style={{
                fontSize: 'var(--step-1)',
                marginBottom: 'var(--space-s)',
                gap: 'var(--space-2xs)'
              }}
            >
              <Clock size={20} />
              진료시간
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xs)' }}>
              <p className="text-gray-400" style={{ fontSize: 'var(--step-0)' }}>평일: 09:00 - 18:00</p>
              <p className="text-gray-400" style={{ fontSize: 'var(--step-0)' }}>토요일: 09:00 - 14:00</p>
              <p className="text-gray-400" style={{ fontSize: 'var(--step-0)' }}>일요일·공휴일: 휴진</p>
              <p 
                className="text-gray-400"
                style={{ 
                  fontSize: 'var(--step--1)', 
                  marginTop: 'var(--space-2xs)' 
                }}
              >
                점심시간: 13:00 - 14:00
              </p>
            </div>
          </div>

          {/* 연락처 및 위치 */}
          <div>
            <h3 
              className="font-semibold text-white"
              style={{
                fontSize: 'var(--step-1)',
                marginBottom: 'var(--space-s)'
              }}
            >
              연락처
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
              <a
                href="tel:02-1234-5678"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                style={{
                  gap: 'var(--space-2xs)',
                  fontSize: 'var(--step-0)'
                }}
              >
                <Phone size={16} />
                02-1234-5678
              </a>
              <div 
                className="flex items-start text-gray-400"
                style={{
                  gap: 'var(--space-2xs)',
                  fontSize: 'var(--step-0)'
                }}
              >
                <MapPin size={16} style={{ marginTop: 'var(--space-3xs)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3xs)' }}>
                  <p>서울특별시 강남구 테헤란로 123</p>
                  <p>맨즈빌딩 5층</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="border-t border-gray-800 text-center text-gray-500"
          style={{
            marginTop: 'var(--space-xl)',
            paddingTop: 'var(--space-l)'
          }}
        >
          <p style={{ fontSize: 'var(--step-0)' }}>&copy; 2024 맨즈 솔루션. All rights reserved.</p>
          <div 
            className="flex justify-center"
            style={{
              marginTop: 'var(--space-s)',
              gap: 'var(--space-m)',
              flexWrap: 'wrap',
              fontSize: 'var(--step--1)'
            }}
          >
            <a href="#" className="hover:text-white transition-colors duration-200">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              이용약관
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              비급여진료비
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}