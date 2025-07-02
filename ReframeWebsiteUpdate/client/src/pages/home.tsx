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
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral mb-6">Reframe Hub</h2>
              <p className="text-lg text-gray-600 mb-6">
                A professional space designed for meetings, conferences, and workshops. Our modern facilities provide the perfect environment for learning, collaboration, and professional development.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-secondary mr-3"></i>
                  <span className="text-gray-700">Modern conference facilities</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-secondary mr-3"></i>
                  <span className="text-gray-700">Professional audio-visual equipment</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-secondary mr-3"></i>
                  <span className="text-gray-700">Flexible seating arrangements</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-secondary mr-3"></i>
                  <span className="text-gray-700">Convenient location</span>
                </div>
              </div>
              <button className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
                Learn More About Our Hub
              </button>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                   alt="Modern conference room with professional setup" 
                   className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
      <CollaborationModal />
    </div>
  );
}
