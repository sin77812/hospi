import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "맨즈 솔루션 - 남성 건강의 시작",
  description: "20년 경력의 전문 의료진이 제공하는 체계적이고 전문적인 비뇨기과 진료",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}