"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  { href: "#about", label: "병원소개" },
  { href: "#doctors", label: "의료진" },
  { href: "#guide", label: "진료안내" },
  { href: "#departments", label: "진료과목" },
  { href: "#cases", label: "치료사례" },
  { href: "#news", label: "병원소식" },
  { href: "#consultation", label: "상담·예약" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md backdrop-blur-lg"
          : "bg-transparent"
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none'
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between" style={{ minHeight: '80px' }}>
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* 데스크톱 네비게이션 - 기본 표시 */}
          <nav 
            className="desktop-nav"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '2rem'
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-colors duration-200 group"
                style={{ 
                  fontSize: '16px',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                {item.label}
                <span 
                  className="absolute left-0 w-0 bg-primary transition-all duration-300 group-hover:w-full" 
                  style={{ 
                    bottom: '-4px',
                    height: '2px'
                  }}
                />
              </Link>
            ))}
            <Link
              href="#booking"
              className="btn-primary"
              style={{
                marginLeft: '1rem',
                whiteSpace: 'nowrap'
              }}
            >
              진료예약
            </Link>
          </nav>

          {/* 모바일 햄버거 버튼 - 기본 숨김 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-button"
            style={{ 
              display: 'none', // 기본 숨김
              padding: '12px',
              borderRadius: '8px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              minWidth: '44px',
              minHeight: '44px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isMobileMenuOpen ? 
              <X size={24} color="var(--foreground)" /> : 
              <Menu size={24} color="var(--foreground)" />
            }
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 오버레이 - 기본 숨김 */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          style={{
            display: 'none', // 기본 숨김
            position: 'fixed',
            top: '80px', // 헤더 높이만큼 내리기
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.95)', // 반투명 배경
            zIndex: 40,
            height: 'auto', // 컨텐츠 높이에 맞게 자동 조절
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            padding: '1rem 0', // 상하 패딩 추가
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' // 그림자 추가
          }}
        >
          <div className="container">
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    padding: '1rem 0'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#booking"
                className="btn-primary text-center"
                style={{ marginTop: '2rem' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                진료예약
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* 모바일 전용 스타일 - 1024px 이하에서만 */}
      <style jsx>{`
        @media screen and (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: flex !important;
          }
          .mobile-overlay {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}