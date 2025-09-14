import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { DoctorsSection } from "@/components/DoctorsSection";
import { DepartmentsSection } from "@/components/DepartmentsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";
import { QuickMenu } from "@/components/QuickMenu";
import "./calendar-custom.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DoctorsSection />
        <DepartmentsSection />
        <TestimonialsSection />
        <BookingSection />
      </main>
      <Footer />
      <QuickMenu />
    </>
  );
}