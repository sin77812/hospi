"use client";

import React from "react";

export const ProstateIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="#E5E7EB" stroke="#0D9488" strokeWidth="2"/>
    <circle cx="32" cy="28" r="12" fill="#0D9488" opacity="0.2"/>
    <circle cx="32" cy="28" r="8" fill="#0D9488"/>
    <rect x="28" y="40" width="8" height="16" rx="4" fill="#0D9488"/>
    <circle cx="24" cy="20" r="3" fill="#0F766E"/>
    <circle cx="40" cy="20" r="3" fill="#0F766E"/>
    <path d="M20 36c4-2 8-2 12 0 4-2 8-2 12 0" stroke="#0F766E" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const MaleFunctionIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="24" width="48" height="16" rx="8" fill="#E5E7EB" stroke="#0D9488" strokeWidth="2"/>
    <rect x="12" y="28" width="40" height="8" rx="4" fill="#0D9488" opacity="0.3"/>
    <circle cx="20" cy="32" r="4" fill="#0D9488"/>
    <circle cx="32" cy="32" r="4" fill="#0D9488"/>
    <circle cx="44" cy="32" r="4" fill="#0D9488"/>
    <path d="M48 16l6-6M48 48l6 6" stroke="#0F766E" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="52" cy="12" r="4" fill="#0F766E"/>
    <circle cx="52" cy="52" r="4" fill="#0F766E"/>
  </svg>
);

export const UrinaryIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="20" rx="16" ry="12" fill="#E5E7EB" stroke="#0D9488" strokeWidth="2"/>
    <ellipse cx="32" cy="20" rx="10" ry="8" fill="#0D9488" opacity="0.2"/>
    <rect x="28" y="32" width="8" height="20" fill="#0D9488" opacity="0.4"/>
    <rect x="30" y="52" width="4" height="8" rx="2" fill="#0D9488"/>
    <path d="M24 38v4M40 38v4M28 42v4M36 42v4" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="26" cy="16" r="2" fill="#0F766E"/>
    <circle cx="38" cy="16" r="2" fill="#0F766E"/>
  </svg>
);

export const StoneIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="24" rx="20" ry="16" fill="#E5E7EB" stroke="#0D9488" strokeWidth="2"/>
    <path d="M20 32c0 8 5.5 16 12 16s12-8 12-16" fill="#0D9488" opacity="0.2"/>
    <polygon points="28,20 36,20 40,28 32,36 24,28" fill="#0F766E"/>
    <polygon points="30,22 34,22 36,26 32,30 28,26" fill="#E5E7EB"/>
    <circle cx="26" cy="30" r="3" fill="#0D9488"/>
    <circle cx="38" cy="26" r="2" fill="#0D9488"/>
    <circle cx="34" cy="34" r="2" fill="#0D9488"/>
    <path d="M16 40l8-4M48 40l-8-4" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const InfectionIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" fill="#E5E7EB" stroke="#0D9488" strokeWidth="2"/>
    <circle cx="32" cy="32" r="16" fill="#0D9488" opacity="0.1"/>
    <circle cx="28" cy="28" r="4" fill="#DC2626"/>
    <circle cx="38" cy="26" r="3" fill="#DC2626" opacity="0.8"/>
    <circle cx="34" cy="38" r="3" fill="#DC2626" opacity="0.6"/>
    <circle cx="24" cy="36" r="2" fill="#DC2626" opacity="0.7"/>
    <circle cx="40" cy="36" r="2" fill="#DC2626" opacity="0.5"/>
    <path d="M20 20c2 2 4 4 2 6s-4 0-6-2M44 20c-2 2-4 4-2 6s4 0 6-2M20 44c2-2 4-4 2-6s-4 0-6 2M44 44c-2-2-4-4-2-6s4 0 6 2" stroke="#EF4444" strokeWidth="1.5"/>
  </svg>
);

export const SurgeryIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="28" width="48" height="8" rx="4" fill="#E5E7EB" stroke="#0D9488" strokeWidth="2"/>
    <rect x="28" y="8" width="8" height="48" rx="4" fill="#E5E7EB" stroke="#0D9488" strokeWidth="2"/>
    <circle cx="32" cy="32" r="8" fill="#0D9488" opacity="0.2"/>
    <circle cx="32" cy="32" r="4" fill="#0D9488"/>
    <rect x="18" y="18" width="4" height="4" rx="1" fill="#0F766E"/>
    <rect x="42" y="18" width="4" height="4" rx="1" fill="#0F766E"/>
    <rect x="18" y="42" width="4" height="4" rx="1" fill="#0F766E"/>
    <rect x="42" y="42" width="4" height="4" rx="1" fill="#0F766E"/>
    <path d="M24 14l4 4M36 14l4 4M24 50l4-4M36 50l4-4" stroke="#0F766E" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const FemaleUrologyIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="28" r="16" fill="#E5E7EB" stroke="#0D9488" strokeWidth="2"/>
    <circle cx="32" cy="28" r="10" fill="#0D9488" opacity="0.2"/>
    <rect x="30" y="44" width="4" height="12" fill="#0D9488"/>
    <rect x="26" y="52" width="12" height="4" fill="#0D9488"/>
    <path d="M22 22c2-2 4-2 6 0M36 22c2-2 4-2 6 0" stroke="#0F766E" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="32" cy="28" rx="6" ry="4" fill="#06B6D4" opacity="0.3"/>
    <circle cx="28" cy="26" r="1.5" fill="#0F766E"/>
    <circle cx="36" cy="26" r="1.5" fill="#0F766E"/>
    <path d="M28 32c2 1 4 1 6 0" stroke="#0F766E" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const PediatricIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="24" r="12" fill="#E5E7EB" stroke="#0D9488" strokeWidth="2"/>
    <circle cx="32" cy="24" r="8" fill="#0D9488" opacity="0.2"/>
    <rect x="26" y="36" width="12" height="20" rx="6" fill="#E5E7EB" stroke="#0D9488" strokeWidth="2"/>
    <rect x="28" y="38" width="8" height="16" rx="4" fill="#0D9488" opacity="0.1"/>
    <circle cx="28" cy="21" r="2" fill="#0F766E"/>
    <circle cx="36" cy="21" r="2" fill="#0F766E"/>
    <path d="M28 26c2 1 4 1 6 0" stroke="#0F766E" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="20" y="38" width="6" height="3" rx="1.5" fill="#06B6D4"/>
    <rect x="38" y="38" width="6" height="3" rx="1.5" fill="#06B6D4"/>
    <path d="M18 16c2 0 4 2 4 4M42 16c2 0 4 2 4 4" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const iconComponents = {
  prostate: ProstateIcon,
  'male-function': MaleFunctionIcon,
  urinary: UrinaryIcon,
  stone: StoneIcon,
  infection: InfectionIcon,
  surgery: SurgeryIcon,
  female: FemaleUrologyIcon,
  pediatric: PediatricIcon,
};