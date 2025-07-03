import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CalendarSection from "@/components/calendar-section";
import TimelineSection from "@/components/timeline-section";
import MilestonesSection from "@/components/milestones-section";
import PartnersCarousel from "@/components/partners-carousel";
import ServicesOverview from "@/components/services-overview";
import TestimonialsSection from "@/components/testimonials-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";
import CollaborationModal from "@/components/collaboration-modal";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <CalendarSection />
      <TimelineSection />
      <MilestonesSection />
      <PartnersCarousel />
      <ServicesOverview />
      {/* Reframe Hub moved to Services section */}
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
      <CollaborationModal />
    </div>
  );
}
