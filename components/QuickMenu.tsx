"use client";

import React from "react";
import { Calendar, Phone, MessageCircle } from "lucide-react";

export function QuickMenu() {
  const handleKakaoClick = () => {
    // 추후 실제 카카오톡 오픈채팅 링크로 변경
    alert("카카오톡 상담 링크가 준비중입니다.");
  };

  return (
    <div 
      className="fixed z-40 flex flex-col"
      style={{
        bottom: 'calc(var(--space-m) + env(safe-area-inset-bottom, 0px))',
        right: 'var(--space-m)',
        gap: 'var(--space-xs)'
      }}
    >
      <button
        onClick={() => {
          const element = document.getElementById("booking");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
        className="touch-target-large touch-manipulation touch-feedback bg-primary text-white rounded-full shadow-lg hover:bg-primary-hover transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
        style={{
          gap: 'var(--space-2xs)',
          padding: 'var(--space-xs) var(--space-s)',
          fontSize: 'var(--step--1)',
          fontWeight: '500',
          borderRadius: 'var(--radius-full)',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <Calendar 
          size={18} 
          style={{ flexShrink: 0 }} 
        />
        <span>예약하기</span>
      </button>
      
      <a
        href="tel:02-1234-5678"
        className="touch-target-large touch-manipulation touch-feedback bg-white text-foreground border border-border rounded-full shadow-lg hover:border-primary hover:text-primary transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
        style={{
          gap: 'var(--space-2xs)',
          padding: 'var(--space-xs) var(--space-s)',
          fontSize: 'var(--step--1)',
          fontWeight: '500',
          borderRadius: 'var(--radius-full)',
          textDecoration: 'none'
        }}
      >
        <Phone 
          size={18} 
          style={{ flexShrink: 0 }} 
        />
        <span>전화상담</span>
      </a>
      
      <button
        onClick={handleKakaoClick}
        className="touch-target-large touch-manipulation touch-feedback bg-[#FEE500] text-[#371D1E] rounded-full shadow-lg hover:bg-[#FDD835] transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
        style={{
          gap: 'var(--space-2xs)',
          padding: 'var(--space-xs) var(--space-s)',
          fontSize: 'var(--step--1)',
          fontWeight: '500',
          borderRadius: 'var(--radius-full)',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <MessageCircle 
          size={18} 
          style={{ flexShrink: 0 }} 
        />
        <span>카카오톡</span>
      </button>
    </div>
  );
}